<template>
  <v-container class="module-default pa-0">
    <div class="module-default__instructions">
      <v-expansion-panels v-model="showInstructions" class="module-default__instructions" flat>
        <v-expansion-panel>
          <v-expansion-panel-header
            v-show="showInstructions"
            hide-actions
            class="pa-0"
            @click="showInstructions = true"
          >
            <template v-slot="{ open }">
              <v-scroll-y-transition hide-on-leave>
                <div v-if="!open" class="d-flex flex-column justify-center">
                  <v-icon color="grey lighten-2" class="d-flex justify-center">
                    mdi-chevron-down
                  </v-icon>
                  <div color="grey lighten-2" class="module-default__collapse-title">
                    INSTRUCTIONS
                  </div>
                </div>
              </v-scroll-y-transition>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <Instruct readonly />
            <div @click="showInstructions = true">
              <div class="module-default__collapse-title">CLOSE</div>
              <!-- <div class="hr"/> OPTIONAL -->
              <v-icon color="grey lighten-2" class="d-flex justify-center"> mdi-chevron-up </v-icon>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <v-progress-linear
      class="mt-3"
      color="#dedede"
      height="2"
      value="100"
      buffer-value="100"
      stream
    />
    <div>
      <!-- ENTER CONTENT HERE -->
      <!-- DESIGN YOUR ACTIVITY HERE / COMMENT OUT WHEN YOU'VE STARTED DESIGNING -->
      <!-- <div class="module-default__none">Design your activity here</div> -->
      <div class="module-default__scope mt-12">
        <v-btn
          dense
          color="blue"
          small
          rounded
          outlined
          depressed
          :href="programDoc.data.adks[index].resourceWeb"
          target="_blank"
          >{{ sampleEmployerName }} {{ programDoc.data.programName
          }}<v-icon small right>mdi-open-in-new</v-icon>
        </v-btn>
        <br />
        <br />
        {{ sampleProjectScope }}
        {{ programDoc.data.programDesc }}
      </div>
      <br />
      <br />
      <!-- <div class="module-default__youtube"></div> -->
      <br />
      <br />
      <div class="faq">
        <v-btn color="white" disabled large rounded depressed>FREQUENTLY ASKED QUESTIONS</v-btn>
        <br />
        <br />

        <template>
          <v-timeline>
            <v-timeline-item v-for="n in 1" :key="n" color="grey" fill-dot left small>
              <v-card outlined color="grey lighten-3" class="elevation-0">
                <v-card-text class="faq-answer"
                  ><div class="faq-answer-dark">
                    <!-- Hi, I'm with -->
                    <span class="faq-answer-dark-highlight"></span>

                    <span class="faq-answer-dark-highlight">
                      <!-- programDoc.data.adks[index].rfp.employerName --> </span
                    >Below are answers to some key questions from the employer
                  </div></v-card-text
                >
              </v-card>
            </v-timeline-item>

            <v-timeline-item v-for="n in 1" :key="n" color="red" fill-dot right small>
              <template v-slot:opposite>
                <span class="faq-question">What is the urgency of this problem?</span>
              </template>
              <v-card color="red" dark outlined class="elevation-0">
                <v-card-text class="faq-answer"
                  ><div class="faq-answer">
                    {{ sampleInterviewProblem }}
                    {{ programDoc.data.adks[index].interviewProblem }}
                  </div></v-card-text
                >
              </v-card>
            </v-timeline-item>

            <v-timeline-item v-for="n in 1" :key="n" right color="green" fill-dot small>
              <template v-slot:opposite>
                <span class="faq-question"
                  >Who could be possible users of the solution created?</span
                >
              </template>
              <v-card color="green" dark outlined class="elevation-0">
                <v-card-text class="faq-answer"
                  ><div class="faq-answer">
                    {{ sampleInterviewSolution }}
                    {{ programDoc.data.adks[index].interviewSolution }}
                  </div></v-card-text
                >
              </v-card>
            </v-timeline-item>

            <v-timeline-item v-for="n in 1" :key="n" right color="purple" fill-dot small>
              <template v-slot:opposite>
                <span class="faq-question">What are the opportunities?</span>
              </template>
              <v-card color="purple" dark outlined class="elevation-0">
                <v-card-text class="faq-answer"
                  ><div class="faq-answer">
                    {{ sampleInterviewOpportunity }}
                    {{ programDoc.data.adks[index].interviewOpportunity }}
                  </div></v-card-text
                >
              </v-card>
            </v-timeline-item>

            <v-timeline-item v-for="n in 1" :key="n" right color="pink" fill-dot small>
              <template v-slot:opposite>
                <span class="faq-question">What are the known challenges?</span>
              </template>
              <v-card color="pink" dark outlined class="elevation-0">
                <v-card-text class="faq-answer"
                  ><div class="faq-answer">
                    {{ sampleInterviewChallenge }}
                    {{ programDoc.data.adks[index].interviewChallenge }}
                  </div></v-card-text
                >
              </v-card>
            </v-timeline-item>

            <v-timeline-item v-for="n in 1" :key="n" right color="blue" fill-dot small>
              <template v-slot:opposite>
                <span class="faq-question">Why are you requesting projects from students?</span>
              </template>
              <v-card color="blue" dark outlined class="elevation-0">
                <v-card-text class="faq-answer"
                  ><div class="faq-answer">
                    {{ sampleIR }}
                    {{ programDoc.data.adks[index].interviewRequest }}
                  </div></v-card-text
                >
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </template>
      </div>
      <br />
      <br />
      <template>
        <v-card tile outlined elevation="0" max-width="" class="mx-auto">
          <v-toolbar elevation="0" dark color="blue">
            <v-icon class="mr-4" large>mdi-clipboard-list</v-icon>
            <v-toolbar-title class="module-default__specs-title"
              >Project Specifications</v-toolbar-title
            >
          </v-toolbar>
          <v-subheader class="font-weight-bold">Outcomes</v-subheader>
          <v-list two-line subheader>
            <v-list-item>
              <div
                v-for="(outcome, itemIndex) in programDoc.data.adks[index].outcome"
                :key="itemIndex"
              >
                <v-chip-group column>
                  <v-chip dark> {{ outcome }} </v-chip>
                </v-chip-group>
              </div>
            </v-list-item>
          </v-list>
          <!-- <v-divider></v-divider> -->
          <v-subheader class="font-weight-bold">Deliverables</v-subheader>
          <v-list two-line subheader>
            <v-list-item>
              <div
                v-for="(deliverable, itemIndex) in programDoc.data.adks[index].deliverable"
                :key="itemIndex"
              >
                <v-chip-group>
                  <v-chip dark>{{ deliverable }}</v-chip>
                </v-chip-group>
              </div>
            </v-list-item>
          </v-list>
          <!-- <v-divider></v-divider> -->
          <v-subheader class="font-weight-bold">Requirements</v-subheader>
          <v-list two-line subheader>
            <v-list-item v-if="programDoc.data.adks[index].projectReq === ''">
              <div>
                <v-chip-group>
                  <v-chip>{{ sampleProjectReq }}</v-chip>
                </v-chip-group>
              </div>
            </v-list-item>
            <v-list-item
              v-for="(requirements, itemIndex) in programDoc.data.adks[index].projectReq"
              :key="itemIndex"
            >
              <template v-slot:default="{}">
                <v-list-item-action>
                  <v-checkbox input-value="true" disabled color="primary"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ requirements }} </v-list-item-title>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list>
          <!-- <v-divider></v-divider> -->
          <v-subheader class="font-weight-bold">Resources</v-subheader>
          <v-list two-line subheader>
            <v-list-item
              v-if="
                programDoc.data.adks[index].resourceDrive === '' &&
                programDoc.data.adks[index].resourceWeb === '' &&
                programDoc.data.adks[index].resourceInsta === '' &&
                programDoc.data.adks[index].resourceFacebook === '' &&
                programDoc.data.adks[index].resourceYouTube === '' &&
                programDoc.data.adks[index].resourceLinkedIn === '' &&
                programDoc.data.adks[index].resourceTwitter === ''
              "
            >
              <div>
                <v-chip-group>
                  <v-chip>{{ sampleResourceChip }}</v-chip>
                </v-chip-group>
              </div>
            </v-list-item>
            <v-list-item>
              <v-btn-group>
                <v-btn
                  v-if="programDoc.data.adks[index].resourceDrive != ''"
                  id="resourcebutton"
                  class="ma-1"
                  depressed
                  small
                  outlined
                  target="_blank"
                  :href="programDoc.data.adks[index].resourceDrive"
                  >Get Started Folder</v-btn
                >
                <v-btn
                  v-if="programDoc.data.adks[index].resourceWeb != ''"
                  class="ma-1"
                  depressed
                  small
                  outlined
                  target="_blank"
                  :href="programDoc.data.adks[index].resourceWeb"
                  >Website</v-btn
                >
                <v-btn
                  v-if="programDoc.data.adks[index].resourceInsta != ''"
                  class="ma-1"
                  depressed
                  small
                  outlined
                  target="_blank"
                  :href="programDoc.data.adks[index].resourceInsta"
                  >Instagram</v-btn
                >
                <v-btn
                  v-if="programDoc.data.adks[index].resourceLinkedIn != ''"
                  class="ma-1"
                  depressed
                  small
                  outlined
                  target="_blank"
                  :href="programDoc.data.adks[index].resourceLinkedIn"
                  >LinkedIn</v-btn
                >
                <v-btn
                  v-if="programDoc.data.adks[index].resourceFacebook != ''"
                  class="ma-1"
                  depressed
                  small
                  outlined
                  target="_blank"
                  :href="programDoc.data.adks[index].resourceFacebook"
                  >Facebook</v-btn
                >
                <v-btn
                  v-if="programDoc.data.adks[index].resourceYouTube != ''"
                  class="ma-1"
                  depressed
                  small
                  outlined
                  target="_blank"
                  :href="programDoc.data.adks[index].resourceYouTube"
                  >YouTube</v-btn
                >
                <v-btn
                  v-if="programDoc.data.adks[index].resourceTwitter != ''"
                  class="ma-1"
                  depressed
                  small
                  outlined
                  target="_blank"
                  :href="programDoc.data.adks[index].resourceTwitter"
                  >Twitter</v-btn
                >
                <!-- <v-btn class="ma-1" depressed small outlined>Articles</v-btn>
                <v-btn class="ma-1" depressed small outlined>Product Specifications</v-btn>
                <v-btn class="ma-1" depressed small outlined>Reports</v-btn> -->
              </v-btn-group>
            </v-list-item>
          </v-list>
          <v-subheader class="font-weight-bold">About</v-subheader>
          <v-list two-line subheader>
            <v-card-text class="module-default__about-text">
              {{ sampleaboutOrg }}
              {{ programDoc.data.adks[index].aboutOrg }}</v-card-text
            >
          </v-list>
        </v-card>
      </template>
      <br />
      <br />
      <!-- <div class="module-default__about">
        <v-btn dense color="blue" large rounded outlined depressed>About</v-btn>
        <br />
        <br />
        Kaiser Permanente (/ˈkaɪzər pɜːrməˈnɛnteɪ/; KP) is an American integrated managed care
        consortium, based in Oakland, California, United States, founded in 1945 by industrialist
        Henry J. Kaiser and physician Sidney Garfield. Kaiser Permanente is made up of three
        distinct but interdependent groups of entities: the Kaiser Foundation Health Plan, Inc.
        (KFHP) and its regional operating subsidiaries; Kaiser Foundation Hospitals; and the
        regional Permanente Medical Groups. As of 2017, Kaiser Permanente operates in eight states
        (Hawaii, Washington, Oregon, California, Colorado, Maryland, Virginia, Georgia) and the
        District of Columbia, and is the largest managed care organization in the United States.
      </div>
      <br />
      <br /> -->
      <!-- <v-divider></v-divider> -->
      <br />
      <br />
      <div class="module-default__scope">
        <v-btn x-large depressed outlined :loading="loading" @click="process()">Finish Reviewing</v-btn>
        <v-alert v-if="success || error" class="mt-3" :type="success ? 'success' : 'error'">{{
          message
        }}</v-alert>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref } from '@vue/composition-api';
import Instruct from './ModuleInstruct.vue';
import MongoDoc from '../types';
import { loading } from 'pcv4lib/src';

export default defineComponent({
  name: 'ModuleDefault',
  components: {
    Instruct
  },
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
    console.log(programDoc.value.data.adks[index].interviewProblem);

    const initRfpSetup = {
      rfp: {
        employerName: '',
        employerWebsite: '',
        projectScope: '',
        introVideo: '',
        aboutOrg: '',
        outcome: ['Qualify for internship to execute on project'],
        deliverable: ['Ideate', 'Pitches', 'Design & Prototype', 'Demonstration', 'Presentation'],
        projectReq: '',
        resourceWeb: '',
        resourceInsta: '',
        resourceLinkedIn: '',
        resourceFacebook: '',
        resourceYouTube: '',
        resourceDrive: '',
        resourceTwitter: '',
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

    console.log(programDoc.value.data.adks[index].interviewProblem);

    let sampleEmployerName = ref('');
    const sampleProjectScope = ref('');
    let sampleInterviewProblem = ref('');
    let sampleInterviewSolution = ref('');
    let sampleInterviewOpportunity = ref('');
    let sampleInterviewChallenge = ref('');
    let sampleIR = ref('');
    const sampleOutcome = ref('');
    const sampleDeliverable = ref('');
    let sampleProjectReq = ref('');
    let sampleaboutOrg = ref('');
    let sampleResourceChip = ref('');
    if (programDoc.value.data.adks[index].employerName === '') {
      sampleEmployerName = ref('Your employer name goes here');
    }
    // if (programDoc.programDesc === '') {
    //   sampleProjectScope = ref('Your employer is crafting their project scope');
    // }
    if (programDoc.value.data.adks[index].interviewProblem === '') {
      sampleInterviewProblem = ref('Awaiting an answer from your employer');
    }
    if (programDoc.value.data.adks[index].interviewSolution === '') {
      sampleInterviewSolution = ref('Awaiting an answer from your employer');
    }
    if (programDoc.value.data.adks[index].interviewOpportunity === '') {
      sampleInterviewOpportunity = ref('Awaiting an answer from your employer');
    }
    if (programDoc.value.data.adks[index].interviewChallenge === '') {
      sampleInterviewChallenge = ref('Awaiting an answer from your employer');
      sampleIR = ref('Awaiting an answer from your employer');
    }
    // if (programDoc.value.data.adks[index].rfp.outcome === '') {
    //   sampleOutcome = ref('SAMPLE OUTPUT 6');
    // }
    // if (programDoc.value.data.adks[index].rfp.deliverable === '') {
    //   sampleDeliverable = ref('SAMPLE OUTPUT 7');
    // }
    if (programDoc.value.data.adks[index].projectReq === '') {
      sampleProjectReq = ref('None');
    }
    if (programDoc.value.data.adks[index].aboutOrg === '') {
      sampleaboutOrg = ref('Awaiting a blurb about your employer');
    }
    if (
      programDoc.value.data.adks[index].resourceDrive === '' &&
      programDoc.value.data.adks[index].resourceWeb === '' &&
      programDoc.value.data.adks[index].resourceInsta === '' &&
      programDoc.value.data.adks[index].resourceFacebook === '' &&
      programDoc.value.data.adks[index].resourceYouTube === '' &&
      programDoc.value.data.adks[index].resourceLinkedIn === ''
    ) {
      sampleResourceChip = ref('None');
    }
    console.log(programDoc.value.data.adks[index].interviewProblem);
    return {
      index,
      programDoc,
      initRfpSetup,
      sampleEmployerName,
      sampleProjectScope,
      sampleInterviewProblem,
      sampleInterviewSolution,
      sampleInterviewOpportunity,
      sampleInterviewChallenge,
      sampleIR,
      sampleOutcome,
      sampleDeliverable,
      sampleProjectReq,
      sampleaboutOrg,
      sampleResourceChip,
      ...loading(
        () => programDoc.value.update(
          () => ({
            isComplete: true,
            adkIndex: index
          })),
        'Saved',
        'Something went wrong, try again later'
      )
      // setup
    };
  },
  data() {
    return {
      showInstructions: 'true'
    };
  }
  // setup() {
  //   const setupInstructions = ref({
  //     description: '',
  //     instructions: ['', '', '']
  //   });
  //   const showInstructions = ref(true);
  //   return {
  //     setupInstructions,
  //     showInstructions
  //   };
  // }
});
</script>

<style lang="scss">
.faq {
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  max-width: 90%;
  margin: auto;
  line-height: 30px;
}
.faq-chat {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 5%;
}
.faq-chat-line {
  margin: 5px;
}
.faq-avatar {
  margin: 5px;
}
.faq-question {
  // text-align: left;
  font-family: 'Raleway';
  font-size: 13px;
  font-weight: 700;
  color: #404142;
}
.faq-answer {
  text-align: left;
  font-family: 'Raleway';
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0px;
  color: white;
  font-style: italic;
}
.faq-answer-dark {
  text-align: left;
  font-family: 'Raleway';
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #404142;
  font-style: italic;
}
.faq-answer-dark-highlight {
  text-align: left;
  font-family: 'Raleway';
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0px;
  color: #404142;
}

.v-timeline-item__divider {
  margin-top: auto;
  margin-bottom: auto;
}
.module-default {
  &__about-text {
    font-family: 'Raleway';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.2px;
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
  &__collapse-divider {
    margin-top: 15px;
    // margin-bottom: 75px;
    // margin-bottom: none !important;
    margin-right: none;
    margin-left: none;
    padding-right: none;
    padding-left: none;
    width: 100%;
  }
  &__collapse-title {
    color: #dedede;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 1px;
    font-size: 13px;
    //  text-uppercase font-weight-bold text-subtitle-2 text-center
  }
  &__container {
    // width: 100%;
    // padding: none;
    // margin: none;
    margin-top: 0px;
    padding: 0px;
  }
  &__employer-title {
    font-size: 25px;
    font-weight: 700;
  }
  &__scope {
    font-size: 22px;
    font-weight: 800;
    text-align: center;
    max-width: 95%;
    margin: auto;
  }
  &__youtube {
    height: 400px;
    width: 95%;
    border-radius: 25px;
    // margin: 0px;
    background-color: #dedede;
    // text-align: center;
    // justify-content: center;
    // align-items: center;
    // padding-top: auto;
    // padding-bottom: auto;
  }
  &__about {
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    max-width: 90%;
    margin: auto;
    line-height: 30px;
  }

  &__specs-title {
    font-weight: 800;
  }
}
</style>
