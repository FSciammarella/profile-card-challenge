<template>
  <div
    class="min-h-400 font-kumbh max-h-450 h-2/3 w-86 rounded-2xl bg-white overflow-clip"
  >
    <header class="card-header h-2/5 rounded-t-2xl"></header>
    <div
      class="flex h-2/5 flex-col items-center border-b border-solid border-dark-grey border-opacity-30"
    >
      <profile-card-picture :src="user.picture" />
      <h1>
        <span class="text-2xl font-semibold text-dark-d-blue">{{
          user.name
        }}</span
        ><span class="text-lg font-regular text-dark-grey ml-3">{{
          user.age
        }}</span>
      </h1>
      <h2 class="text-lg font-light text-dark-grey">{{ user.location }}</h2>
    </div>
    <div
      class="h-1/5 flex flex-row text-lg text-dark-d-blue font-bold box-border"
    >
      <div class="card-stats">
        <span>{{ user.followers }}</span
        ><span class="card-stats-description">Followers</span>
      </div>
      <div class="card-stats">
        <span>{{ user.likes }}</span
        ><span class="card-stats-description">Likes</span>
      </div>
      <div class="card-stats">
        <span>{{ user.photos }}</span
        ><span class="card-stats-description">Photos</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCardPicture from './ProfileCardPicture.vue';
export default {
  props: ['header-background', 'user'],
  components: { ProfileCardPicture },
  name: 'ProfileCard',
};
</script>

<style lang="postcss">
@layer components {
  .card-header {
    background-image: url('../../assets/mocks/profile-card-component-main/images/bg-pattern-card.svg');
  }
  .card-stats {
    @apply flex flex-col justify-center items-center w-1/3;
  }
  .card-stats-description {
    @apply font-light text-sm text-dark-grey;
  }
}

@layer utilities {
}
</style>
