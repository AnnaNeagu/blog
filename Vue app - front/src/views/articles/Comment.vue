<template>
 
    <!-- <p>Comments: {{ article.comments}}</p> -->
    
      <!-- <router-link :to="{name: 'Comment', params: {id: comment.id}}"> -->
      <table class="table table-success table-striped" border="1">
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          <tr>
            <td align="left">Commenter: {{ comment.commenter }}</td>
            <td align="left">Comment: {{ comment.body }}</td>
            <td align="left">
              <button
                @click="deleteComment"
                 class="btn btn-outline-success"
                type="button"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- </router-link> -->
  
 
</template>

<script>
import axios from "axios";
export default {
  name: "Comment",
  props: {
    comment: Object,
  },
  methods: {
    async deleteComment() {
      const res = await axios.delete(
        "http://localhost:3000/apis/comments/v1/articles/" +
          this.comment.article_id +
          "/comments/" +
          this.comment.id
      );
      if (res.status == 200) {
        this.$router.go(0);
      }
    },
  },
};
</script>