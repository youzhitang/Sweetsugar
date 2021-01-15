<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    {{ recordList }}
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';
import {Component, Watch} from 'vue-property-decorator';


const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

//查看用户数据库版本
const version = window.localStorage.getItem('version') || '0';
if (version < '0.0.2') {
// 数据库升级，数据迁移
  recordList.forEach(record => {
    record.createdAt = new Date(1970, 0, 0, 8, 0, 0);
  });
  window.localStorage.setItem('recordList', JSON.stringify(recordList));
}
// 数据库版本
window.localStorage.setItem('version', '0.0.1');

type  Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; // 数据类型：object | string
  createdAt?: Date; // 类 / 构造函数
}

@Component({
  components: {Types, Notes, Tags, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '彩票'];
  recordList: Record[] = recordList;
  record: Record = {tags: [], notes: '', type: '-', amount: 0};

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
