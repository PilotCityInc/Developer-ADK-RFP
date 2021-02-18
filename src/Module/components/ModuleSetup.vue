<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <v-container class="module-edit">
      <div class="module-edit__container">
        <!-- NO SETUP NECESSARY / COMMENT OUT IF SETUP IS NECESSARY -->
        <!-- <div class="module-setup__none">No setup necessary</div> -->
        <!-- ENTER CONTENT HERE -->
        <!-- <v-divider class="presets__divider"></v-divider> -->
        <div class="headline font-weight-bold text-center mb-10">Define Scope</div>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.employerName"
            prepend-icon="mdi-music-accidental-sharp"
            rounded
            :error-messages="errors"
            label="Employer Name"
            hint="Enter your organization name"
            outlined
          ></v-text-field>
        </validation-provider>
        <!-- :rules="{
            regex: /(?:http|https):\/\/(?:www.)(?:\w+|\d+)(?:.com)/
          }" -->

        <!-- <validation-provider v-slot="{ errors }" slim rules="required">
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.employerWebsite"
            :error-messages="errors"
            label="Employer Website"
            hint="Enter your website address"
            outlined
          ></v-text-field>
        </validation-provider> -->

        <!-- <v-divider class="presets__divider"></v-divider> -->
        <!-- <div class="presets__section-title">Define Scope</div> -->
        <div class="module-setup__buildscope">
          <!-- INSERT V-DIALOG HERE TO OPEN UP PROMPT BUILDER WE BUILT LAST YEAR FOR TEACHERS -->
          <!-- <v-btn depressed outlined x-small>Build Scope Now</v-btn> -->
        </div>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-textarea
            v-model="programDoc.data.adks[index].rfp.projectScope"
            rounded
            prepend-icon="mdi-text-subject"
            counter="280"
            :error-messages="errors"
            outlined
            label="What is the project scope?"
            placeholder="In a tweet or less, define your project scope for students"
          ></v-textarea>
        </validation-provider>
        <div class="module-setup__buildscope">
          <!-- INSERT V-DIALOG HERE TO OPEN UP PROMPT BUILDER WE BUILT LAST YEAR FOR TEACHERS -->
          <!-- <v-btn depressed outlined x-small>Make Video Now</v-btn> -->
        </div>
        <!-- <validation-provider
          v-slot="{ errors }"
          slim
          :rules="{
            regex: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
          }"
        >
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.introVideo"
            outlined
            :error-messages="errors"
            label="Enter Introduction Video (YouTube URL Link)"
            placeholder="https://www.youtube.com/linkextension"
            prepend-inner-icon="mdi-youtube"
          ></v-text-field>
        </validation-provider> -->
        <div class="module-setup__buildscope">
          <!-- INSERT V-DIALOG HERE TO OPEN UP PROMPT BUILDER WE BUILT LAST YEAR FOR TEACHERS -->
          <!-- <v-btn depressed outlined x-small>Get From LinkedIn</v-btn> -->
        </div>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-textarea
            v-model="programDoc.data.adks[index].rfp.aboutOrg"
            rounded
            prepend-icon="mdi-book-open-variant"
            :error-messages="errors"
            outlined
            label="About your organization"
            placeholder="In a paragraph or less, describe your organization"
          ></v-textarea>
        </validation-provider>
        <v-divider class="presets__divider"></v-divider>
        <div class="headline font-weight-bold text-center mb-10">Select Specifications</div>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-select
            v-model="programDoc.data.adks[index].rfp.outcome"
            :error-messages="errors"
            :items="outcomes"
            chips
            label="Outcomes"
            multiple
            outlined
            rounded
          ></v-select>
        </validation-provider>
        <div class="module-setup__buildscope">
          <!-- INSERT V-DIALOG HERE TO OPEN UP PROMPT BUILDER WE BUILT LAST YEAR FOR TEACHERS -->
          <!-- <v-btn depressed outlined disabled x-small>Connected with activities</v-btn> -->
        </div>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-select
            v-model="programDoc.data.adks[index].rfp.deliverable"
            :items="deliverables"
            :error-messages="errors"
            chips
            label="Deliverables"
            multiple
            outlined
            rounded
          ></v-select>
        </validation-provider>
        <template>
          <validation-provider v-slot="{ errors }" slim>
            <v-combobox
              v-model="programDoc.data.adks[index].rfp.projectReq"
              rounded
              outlined
              flat
              :items="items"
              chips
              multiple
              label="Project Requirements"
              :error-messages="errors"
            >
              <template v-slot:selection="{ attrs, item, select, selected }">
                <v-chip
                  v-bind="attrs"
                  :input-value="selected"
                  close
                  @click="select"
                  @click:close="remove(item)"
                >
                  <strong>{{ item }}</strong
                  >&nbsp;
                  <span></span>
                </v-chip>
              </template>
            </v-combobox>
          </validation-provider>
        </template>

        <v-divider class="presets__divider"></v-divider>
        <div class="headline font-weight-bold text-center mb-10">Provide Links</div>

        <validation-provider
          v-slot="{ errors }"
          slim
          :rules="{
            regex: /(?:http|https):\/\/(?:www.)(?:\w+|\d+)(?:.com)/
          }"
        >
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.resourceWeb"
            :error-messages="errors"
            outlined
            label="Website"
            placeholder="https://www.employername.com/"
            prepend-icon="mdi-search-web"
            rounded
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          slim
          :rules="{
            regex: /^(?:(?:http|https):\/\/)?(?:www.)?instagram.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/
          }"
        >
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.resourceInsta"
            :error-messages="errors"
            outlined
            label="Instagram"
            placeholder="https://www.instagram.com/username"
            prepend-icon="mdi-instagram"
            rounded
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          slim
          :rules="{
            regex: /(?:http|https):\/\/(?:www.)?linkedin.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/
          }"
        >
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.resourceLinkedIn"
            :error-messages="errors"
            outlined
            label="LinkedIn"
            placeholder="https://www.linkedin.com/username"
            prepend-icon="mdi-linkedin"
            rounded
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          slim
          :rules="{
            regex: /^(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/
          }"
        >
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.resourceFacebook"
            outlined
            :error-messages="errors"
            label="Facebook"
            placeholder="https://www.facebook.com/username"
            prepend-icon="mdi-facebook"
            rounded
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          slim
          :rules="{
            regex: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
          }"
        >
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.resourceYouTube"
            :error-messages="errors"
            outlined
            label="YouTube"
            placeholder="https://www.youtube.com/username"
            prepend-icon="mdi-youtube"
            rounded
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          slim
          :rules="{
            regex: /(?:http|https):\/\/(?:www.)(?:\w+|\d+)(?:.com)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/
          }"
        >
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.resourceDrive"
            outlined
            :error-messages="errors"
            label="Get Started Folder"
            placeholder="https://drive.google.com/foldername"
            prepend-icon="mdi-folder-google-drive"
            rounded
          ></v-text-field>
        </validation-provider>

        <v-divider class="presets__divider"></v-divider>
        <div class="headline font-weight-bold text-center mb-10">Key Questions</div>

        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.interviewProblem"
            :error-messages="errors"
            outlined
            counter="280"
            label="What is the urgency of this problem?"
            placeholder="In a tweet or less, answer the question for student participants."
            prepend-icon="mdi-hexagon-slice-2"
            rounded
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.interviewSolution"
            :error-messages="errors"
            outlined
            counter="280"
            label="Who could be possible users of the solution created?"
            placeholder="In a tweet or less, answer the question for student participants."
            prepend-icon="mdi-hexagon-slice-3"
            rounded
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.interviewOpportunity"
            :error-messages="errors"
            outlined
            counter="280"
            label="What are the opportunities?"
            placeholder="In a tweet or less, answer the question for student participants."
            prepend-icon="mdi-hexagon-slice-4"
            rounded
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.interviewChallenge"
            :error-messages="errors"
            outlined
            counter="280"
            label="What are the known challenges?"
            placeholder="In a tweet or less, answer the question for student participants."
            prepend-icon="mdi-hexagon-slice-5"
            rounded
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-text-field
            v-model="programDoc.data.adks[index].rfp.interviewRequest"
            :error-messages="errors"
            outlined
            counter="280"
            label="Why are you requesting projects from students?"
            placeholder="In a tweet or less, answer the question for student participants."
            prepend-icon="mdi-hexagon-slice-6"
            rounded
          ></v-text-field>
        </validation-provider>

        <div class="module-default__scope mt-12">
          <v-btn
            x-large
            depressed
            outlined
            :disabled="invalid"
            :loading="loading"
            @click="process()"
            >Save</v-btn
          >
          <v-alert v-if="success || error" v-alert:type="success ? 'success' : 'error'"/< >
        </div>
      </div>
    </v-container>
  </ValidationObserver>
</template>

<script lang="ts">
import { reactive, toRefs, PropType, computed, defineComponent, ref } from '@vue/composition-api';
import { createLoader, getModAdk } from 'pcv4lib/src';
import { deliverablesValue, chips, items } from './const';
import MongoDoc from '../types';
// import gql from 'graphql-tag';

export default defineComponent({
  name: 'ModuleSetup',
  props: {
    value: {
      required: true,
      type: Object as PropType<MongoDoc>
    }
  },

  setup(props, ctx) {
    const programDoc = computed({
      get: () => props.value,
      set: newVal => {
        ctx.emit('input', newVal);
      }
    });

    const index = programDoc.value.data.adks.findIndex(function findRfpObj(obj) {
      return obj.name === 'rfp';
    });
    const initRfpSetup = {
      rfp: {
        employerName: '',
        employerWebsite: '',
        projectScope: '',
        introVideo: '',
        aboutOrg: '',
        outcome: ['Build portfolio project', 'Qualify for internship to execute on project'],
        deliverable: ['Ideate', 'Pitches', 'Design & Prototype', 'Demonstration', 'Presentation'],
        projectReq: '',
        resourceWeb: '',
        resourceInsta: '',
        resourceLinkedIn: '',
        resourceFacebook: '',
        resourceYouTube: '',
        resourceDrive: '',
        interviewProblem: '',
        interviewSolution: '',
        interviewOpportunity: '',
        interviewChallenge: '',
        interviewReqeust: '',
        required: false
      }
    };

    programDoc.value.data.adks[index] = {
      ...initRfpSetup,
      ...programDoc.value.data.adks[index]
    };

    function populate() {
      programDoc.value.data.adks[index].rfp.push(initRfpSetup.rfp[0]);
    }
    const setup = reactive({
      outcomes: ['Build portfolio project', 'Qualify for internship to execute on project'],
      // outcomesValue,
      deliverables: ['Ideate', 'Pitches', 'Design & Prototype', 'Demonstration', 'Presentation'],
      deliverablesValue,
      chips,
      items
    });

    return {
      ...toRefs(setup),
      populate,
      index,
      programDoc,
      ...createLoader(programDoc.value.save, 'Saved Successfully', 'Could not save at this time')
    };
  }

  // setup() {
  //   const setup = reactive({
  //     outcomes,
  //     outcomesValue,
  //     deliverables,
  //     deliverablesValue,
  //     chips,
  //     items
  //   });

  //   const employer = reactive({
  //     employerName: '',
  //     employerWebsite: '',
  //     projectScope: '',
  //     introVideo: '',
  //     aboutOrg: '',
  //     outcome: [] as string[],
  //     deliverable: [] as string[],
  //     projectReq: [] as string[],
  //     resourceWeb: '',
  //     resourceInsta: '',
  //     resourceLinkedIn: '',
  //     resourceFacebook: '',
  //     resourceYouTube: '',
  //     resourceDrive: '',
  //     interviewProblem: '',
  //     interviewSolution: '',
  //     interviewOpportunity: '',
  //     interviewChallenge: '',
  //     interviewRequest: ''
  //   });
  //   return {
  //     ...toRefs(setup),
  //     ...toRefs(employer)
  //   };
  // }
});
</script>

<style lang="scss">
.module-setup {
  &__buildscope {
    text-align: right;
    margin-bottom: 10px;
  }
  &__none {
    border-radius: 5px;
    // border: 1px solid #dedede;
    height: 100px;
    text-align: center;
    background-color: #dedede;
    font-weight: 700;
    color: #ffffff;
    font-size: 18px;
    padding-top: 35px;
  }
}
</style>
