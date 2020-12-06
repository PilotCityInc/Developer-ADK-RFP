<template>
  <ValidationObserver v-slot="{ invalid }" slim>
    <v-container class="module-edit">
      <div class="module-edit__container">
        <!-- NO SETUP NECESSARY / COMMENT OUT IF SETUP IS NECESSARY -->
        <!-- <div class="module-setup__none">No setup necessary</div> -->
        <!-- ENTER CONTENT HERE -->
        <!-- <v-divider class="presets__divider"></v-divider> -->
        <div class="presets__section-title">Enter Info</div>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-text-field
            v-model="employerName"
            :error-messages="errors"
            label="Employer Name"
            hint="Kaiser Permanente National Innovation"
            outlined
          ></v-text-field>
        </validation-provider>

        <v-text-field
          v-model="employerWebsite"
          label="Enter your employer website"
          hint="www.employername.com"
          outlined
        ></v-text-field>

        <v-divider class="presets__divider"></v-divider>
        <div class="presets__section-title">Develop Content</div>
        <div class="module-setup__buildscope">
          <!-- INSERT V-DIALOG HERE TO OPEN UP PROMPT BUILDER WE BUILT LAST YEAR FOR TEACHERS -->
          <v-btn depressed outlined x-small>Build Scope Now</v-btn>
        </div>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-textarea
            v-model="projectScope"
            :error-messages="errors"
            outlined
            label="What is the project scope?"
            placeholder="In a tweet or less, describe your scope of the project mission"
          ></v-textarea>
        </validation-provider>
        <div class="module-setup__buildscope">
          <!-- INSERT V-DIALOG HERE TO OPEN UP PROMPT BUILDER WE BUILT LAST YEAR FOR TEACHERS -->
          <v-btn depressed outlined x-small>Make Video Now</v-btn>
        </div>
        <validation-provider
          v-slot="{ errors }"
          slim
          :rules="{
            regex: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
          }"
        >
          <v-text-field
            v-model="introVideo"
            outlined
            :error-messages="errors"
            label="Enter Introduction Video (YouTube URL Link)"
            placeholder="https://www.youtube.com/linkextension"
            prepend-inner-icon="mdi-youtube"
          ></v-text-field>
        </validation-provider>
        <div class="module-setup__buildscope">
          <!-- INSERT V-DIALOG HERE TO OPEN UP PROMPT BUILDER WE BUILT LAST YEAR FOR TEACHERS -->
          <v-btn depressed outlined x-small>Get From LinkedIn</v-btn>
        </div>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-textarea
            v-model="aboutOrg"
            :error-messages="errors"
            outlined
            label="About your organization"
            placeholder="In a paragraph or less, describe your organization"
          ></v-textarea>
        </validation-provider>
        <v-divider class="presets__divider"></v-divider>
        <div class="presets__section-title">Select Specifications</div>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-select
            v-model="outcome"
            :error-messages="errors"
            :items="outcomes"
            chips
            label="Outcomes"
            multiple
            outlined
          ></v-select>
        </validation-provider>
        <div class="module-setup__buildscope">
          <!-- INSERT V-DIALOG HERE TO OPEN UP PROMPT BUILDER WE BUILT LAST YEAR FOR TEACHERS -->
          <v-btn depressed outlined disabled x-small>Connected with activities</v-btn>
        </div>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-select
            v-model="deliverable"
            :items="deliverables"
            :error-messages="errors"
            chips
            label="Deliverables"
            multiple
            outlined
          ></v-select>
        </validation-provider>
        <template>
          <validation-provider v-slot="{ errors }" slim rules="required">
            <v-combobox
              v-model="projectReq"
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
        <div class="presets__section-title">Provide Resources</div>

        <v-text-field
          v-model="resourceWeb"
          outlined
          label="Website"
          placeholder="https://www.employername.com/"
          prepend-inner-icon="mdi-search-web"
        ></v-text-field>

        <v-text-field
          v-model="resourceInsta"
          outlined
          label="Instagram"
          placeholder="https://www.instagram.com/username"
          prepend-inner-icon="mdi-instagram"
        ></v-text-field>

        <v-text-field
          v-model="resourceLinkedIn"
          outlined
          label="LinkedIn"
          placeholder="https://www.linkedin.com/username"
          prepend-inner-icon="mdi-linkedin"
        ></v-text-field>

        <v-text-field
          v-model="resourceFacebook"
          outlined
          label="Facebook"
          placeholder="https://www.facebook.com/username"
          prepend-inner-icon="mdi-facebook"
        ></v-text-field>

        <validation-provider
          v-slot="{ errors }"
          slim
          :rules="{
            regex: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
          }"
        >
          <v-text-field
            v-model="resourceYouTube"
            :error-messages="errors"
            outlined
            label="YouTube"
            placeholder="https://www.youtube.com/username"
            prepend-inner-icon="mdi-youtube"
          ></v-text-field>
        </validation-provider>

        <v-text-field
          v-model="resourceDrive"
          outlined
          label="Get Started Folder"
          placeholder="https://drive.google.com/foldername"
          prepend-inner-icon="mdi-folder-google-drive"
        ></v-text-field>

        <v-divider class="presets__divider"></v-divider>
        <div class="presets__section-title">Self-Interview</div>

        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-textarea
            v-model="interviewProblem"
            :error-messages="errors"
            outlined
            label="What is the urgency of this problem?"
            placeholder="In a tweet or less, answer the question for student participants."
          ></v-textarea>
        </validation-provider>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-textarea
            v-model="interviewSolution"
            :error-messages="errors"
            outlined
            label="Who could be possible users of the solution created?"
            placeholder="In a tweet or less, answer the question for student participants."
          ></v-textarea>
        </validation-provider>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-textarea
            v-model="interviewOpportunity"
            :error-messages="errors"
            outlined
            label="What are the opportunities?"
            placeholder="In a tweet or less, answer the question for student participants."
          ></v-textarea>
        </validation-provider>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-textarea
            v-model="interviewChallenge"
            :error-messages="errors"
            outlined
            label="What are the known challenges?"
            placeholder="In a tweet or less, answer the question for student participants."
          ></v-textarea>
        </validation-provider>
        <validation-provider v-slot="{ errors }" slim rules="required">
          <v-textarea
            v-model="interviewChallenge"
            :error-messages="errors"
            outlined
            label="Why are you requesting projects from students?"
            placeholder="In a tweet or less, answer the question for student participants."
          ></v-textarea>
        </validation-provider>

        <div class="module-default__scope">
          <v-btn x-large depressed outlined :disabled="invalid">Save</v-btn>
        </div>
      </div>
    </v-container>
  </ValidationObserver>
</template>

<script lang="ts">
import { reactive, toRefs } from '@vue/composition-api';
import { outcomes, outcomesValue, deliverables, deliverablesValue, chips, items } from './const';
// import gql from 'graphql-tag';

export default {
  name: 'ModuleSetup',

  setup() {
    const setup = reactive({
      outcomes,
      outcomesValue,
      deliverables,
      deliverablesValue,
      chips,
      items
    });

    const employer = reactive({
      employerName: '',
      employerWebsite: '',
      projectScope: '',
      introVideo: '',
      aboutOrg: '',
      outcome: [] as string[],
      deliverable: [] as string[],
      projectReq: [] as string[],
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
      interviewRequest: ''
    });
    return {
      ...toRefs(setup),
      ...toRefs(employer)
    };
  }
};
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
