<template>
  <div class="posts mt-3">
    <ul class="list-unstyled">
      <li v-for="post in posts" class="media m-3">
        <img class="mr-3" :src="post.data.thumbnail" alt="Generic placeholder image">
        <div class="media-body">
          <h5 class="mt-0 mb-1"><a :href="createUrl(post.data.permalink)" target="blank">{{ post.data.title }}</a></h5>
          <p>
          <h3 class="ups text-danger">{{ post.data.ups }} ⬆️</h3>
          <p>created {{ distanceToNow(post.data.created)}} ago by {{post.data.author}}</p>
          <span class="badge bg-secondary">{{ post.data.num_comments }} comments</span>
          <button v-if="isImage(post)" @click="post.showImage = !post.showImage" type="button" class="btn btn-primary">{{post.showImage ? 'Hide' : 'Show'}} Image</button>
          <div v-if="post.showImage">
            <img :src="post.data.url" frameborder="0">
          </div>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { parse, toDate, formatDistanceToNow } from 'date-fns';
export default {
  name: 'Posts',
  data() {
    return {
      posts: [],

    };
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      const url = 'https://www.reddit.com/r/spongebob/.json';
      const res = await fetch(url);
      const data = await res.json();
      // eslint-disable-next-line no-console
      console.log(data.data.children);
      data.data.children.forEach(child=>{
        child.showImage=false;
      });
      this.posts = data.data.children;
    },
    formatDate(date) {
      let trueDate = date * 1000;
      return toDate(trueDate);
    },
    distanceToNow(date) {
      let trueDate = date * 1000;
      return formatDistanceToNow(trueDate);
    },
    createUrl(path){
      return `https://www.reddit.com${path}`;
    },
    isImage(post){
     return post.data.url.match(/\.(jpg|jpeg|png|bpm)$/)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
