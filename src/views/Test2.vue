<template>
  <v-container grid-list-xs>
      <h1 class="mb-4">List Username In Database</h1>

    <v-simple-table >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            username
          </th>
          <th class="text-left">
            email
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in listUser"
          :key="item.id"
        >
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: "Test2",
    data() {
      return {
        listUser: [],
      }
    },
    mounted() {
    axios
    .get('http://localhost:8080/api/v1/allUser')
    .then(response => (
      this.listUser = response.data,
      console.log(response.data)
    ))
  },
}
</script>

<style>

</style>