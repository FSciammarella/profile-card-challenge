<template>
  <profile-card :user="user" class="z-10" />
</template>

<script>
import ProfileCard from './ProfileCard.vue';
export default {
  data() {
    let user = {
      name: 'Victor Crest',
      age: 26,
      picture: 'images/image-victor.jpg',
      location: 'London',
      followers: '80K',
      likes: '803K',
      photos: '1.4K',
    };
    return { user };
  },
  components: { ProfileCard },
  name: 'ProfileCardContainer',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');
</style>
