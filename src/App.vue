<template>
  <v-app>
    <Module
      v-model="programDocStub"
      :user-type="userTypeStub"
      :student-doc="studentDoc"
      @inputStudentDoc="studentDoc = $event"
    />
  </v-app>
</template>

<script lang="ts">
// import ApolloExample from './components/ApolloExample.vue';
import { defineComponent, ref, Ref } from '@vue/composition-api';
import Module from './Module/Module.vue';
import MongoDoc from './Module/types';

export default defineComponent({
  name: 'App',

  components: {
    Module
  },
  setup() {
    const programDocStub: Ref<MongoDoc> = ref({
      data: {
        adks: [],
        programDesc: 'Mocked Description',
        programName: 'Mocked Name'
      },
      update: () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true);
            // reject(new Error('REJECTED'));
          }, 3000);
        });
      },
      changeStream: {}
    });
    const userTypeStub = 'organizer';
    const studentDoc: Ref<MongoDoc | null> = ref({
      data: {
        adks: [],
        programDesc: 'Mocked Description',
        programName: 'Mocked Name'
      },
      update: () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true);
            // reject(new Error('REJECTED'));
          }, 3000);
        });
      },
      changeStream: {}
    });
    if (userTypeStub === 'organizer') studentDoc.value = null;
    return {
      programDocStub,
      userTypeStub,
      studentDoc
    };
  }
});
</script>
