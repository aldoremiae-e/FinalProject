<template>
  <div class="score-list">

    <score-list-form></score-list-form>
    <div class="mx-4">
      <score-list-item
        v-for="score in scores"
        :score="score"
        :key="score.pk">
      </score-list-item>
    </div>
  </div>
  
</template>

<script>
import ScoreListItem from '@/components/ScoreListItem.vue'
import ScoreListForm from '@/components/ScoreListForm.vue'

export default {
  name: 'ScoreList',
  components: { ScoreListForm, ScoreListItem},
  props: { scores: Array },

}
</script>
  
<style>
/* .score-list {
    border: 1px solid blue;
  } */
</style>