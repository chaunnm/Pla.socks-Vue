<template>
  <div class="adminToDo-container">
    <div class="section">
      <h3>App</h3>
      <h2>
        To Do
        <i class="fa-solid fa-list"></i>
      </h2>
    </div>
    <div class="to-do">
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="kanban in kanbans"
            :key="kanban.title"
            :cols="kanban.flex"
            width="100%"
          >
            <v-card>
              <v-expansion-panels hover multiple v-model="panel">
                <v-expansion-panel>
                  <v-expansion-panel-header :color="kanban.color">
                    <strong class="font-weight-bold text-h6">{{
                      kanban.headerText
                    }}</strong>
                    <i class="gray--text text-subtitle-1">-- 5 items</i>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content :color="kanban.color">
                    <v-container class="pa-0">
                      <v-row dense>
                        <v-col
                          cols="12"
                          v-model="getTasks"
                          v-for="task in getTasks"
                          :key="task.Id"
                        >
                          <v-card
                            class="adminTaskToDo-container white rounded-lg pa-2 mx-auto"
                            elevation="2"
                          >
                            <v-card-text
                              class="pa-0 font-weight-medium black--text"
                            >
                              {{ task.Id }}
                            </v-card-text>
                            <v-card-text class="pa-0">
                              {{ task.Summary }}
                            </v-card-text>
                            <v-card-text class="pa-0">
                              <v-sheet>
                                <v-chip-group
                                  multiple
                                  active-class="primary--text"
                                >
                                  <v-chip v-for="tag in task.Tags" :key="tag">
                                    {{ tag }}
                                  </v-chip>
                                </v-chip-group>
                              </v-sheet>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <!-- <v-card-title
                v-text="card.headerText"
                class="text-capitalize"
              ></v-card-title>
              <v-card-text v-text="`${card.type}`"> </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img> -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  title: "Admin - To Do List",
  name: "AdminToDo",
  components: {},
  data() {
    return {
      panel: [0],
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      mini: false,
      kanbans: [
        {
          headerText: "To Do",
          keyField: "Open",
          allowToggle: true,
          flex: 3,
          color: "#FFFAEA",
        },

        {
          headerText: "In Progress",
          keyField: "InProgress",
          allowToggle: true,
          flex: 3,
          color: "#F3FFEA",
        },

        {
          headerText: "Testing",
          keyField: "Testing",
          allowToggle: true,
          isExpanded: false,
          flex: 3,
          color: "#F3D5E3",
        },

        {
          headerText: "Done",
          keyField: "Close",
          allowToggle: true,
          flex: 3,
          color: "#C3E6E8",
        },
      ],
      tasks: [
        {
          Id: "Task 1",
          Title: "Task - 29001",
          Status: "Open",
          Summary: "Analyze the new requirements gathered from the customer.",
          Type: "Story",
          Priority: "Low",
          Tags: ["Analyze"],
          Estimate: 3.5,
          Assignee: "Nancy Davloio",
          RankId: 1,
          Color: "#02897B",
          ClassName: "e-story, e-low, e-nancy-davloio",
        },
        {
          Id: "Task 2",
          Title: "Task - 29002",
          Status: "InProgress",
          Summary: "Improve application performance",
          Type: "Improvement",
          Priority: "Normal",
          Tags: ["Improvement"],
          Estimate: 6,
          Assignee: "Andrew Fuller",
          RankId: 1,
          Color: "#673AB8",
          ClassName: "e-improvement, e-normal, e-andrew-fuller",
        },
        {
          Id: "Task 3",
          Title: "Task - 29003",
          Status: "Open",
          Summary:
            "Arrange a web meeting with the customer to get new requirements.",
          Type: "Others",
          Priority: "Critical",
          Tags: ["Meeting"],
          Estimate: 5.5,
          Assignee: "Janet Leverling",
          RankId: 2,
          Color: "#1F88E5",
          ClassName: "e-others, e-critical, e-janet-leverling",
        },
        {
          Id: "Task 4",
          Title: "Task - 29004",
          Status: "InProgress",
          Summary: "Fix the issues reported in the IE browser.",
          Type: "Bug",
          Priority: "Critical",
          Tags: ["IE"],
          Estimate: 2.5,
          Assignee: "Janet Leverling",
          RankId: 2,
          Color: "#E64A19",
          ClassName: "e-bug, e-release, e-janet-leverling",
        },
        {
          Id: "Task 5",
          Title: "Task - 29005",
          Status: "Review",
          Summary: "Fix the issues reported by the customer.",
          Type: "Bug",
          Priority: "Low",
          Tags: ["Customer"],
          Estimate: "3.5",
          Assignee: "Steven walker",
          RankId: 1,
          Color: "#E64A19",
          ClassName: "e-bug, e-low, e-steven-walker",
        },
        {
          Id: "Task 6",
          Title: "Task - 29007",
          Status: "Validate",
          Summary: "Validate new requirements",
          Type: "Improvement",
          Priority: "Low",
          Tags: ["Validation"],
          Estimate: 1.5,
          Assignee: "Robert King",
          RankId: 1,
          Color: "#673AB8",
          ClassName: "e-improvement, e-low, e-robert-king",
        },
        {
          Id: "Task 7",
          Title: "Task - 29009",
          Status: "Review",
          Summary: "Fix the issues reported in Safari browser.",
          Type: "Bug",
          Priority: "Critical",
          Tags: ["Fix", "Safari"],
          Estimate: 1.5,
          Assignee: "Nancy Davloio",
          RankId: 2,
          Color: "#E64A19",
          ClassName: "e-bug, e-release, e-nancy-davloio",
        },
        {
          Id: "Task 8",
          Title: "Task - 29010",
          Status: "Close",
          Summary: "Test the application in the IE browser.",
          Type: "Story",
          Priority: "Low",
          Tags: ["Review", "IE"],
          Estimate: 5.5,
          Assignee: "Margaret hamilt",
          RankId: 3,
          Color: "#02897B",
          ClassName: "e-story, e-low, e-margaret-hamilt",
        },
        {
          Id: "Task 9",
          Title: "Task - 29011",
          Status: "Validate",
          Summary: "Validate the issues reported by the customer.",
          Type: "Story",
          Priority: "High",
          Tags: ["Validation", "Fix"],
          Estimate: 1,
          Assignee: "Steven walker",
          RankId: 1,
          Color: "#02897B",
          ClassName: "e-story, e-high, e-steven-walker",
        },
        {
          Id: "Task 10",
          Title: "Task - 29015",
          Status: "Open",
          Summary: "Show the retrieved data from the server in grid control.",
          Type: "Story",
          Priority: "High",
          Tags: ["Database", "SQL"],
          Estimate: 5.5,
          Assignee: "Margaret hamilt",
          RankId: 4,
          Color: "#02897B",
          ClassName: "e-story, e-high, e-margaret-hamilt",
        },
        {
          Id: "Task 11",
          Title: "Task - 29016",
          Status: "InProgress",
          Summary: "Fix cannot open user’s default database SQL error.",
          Priority: "Critical",
          Type: "Bug",
          Tags: ["Database", "Sql2008"],
          Estimate: 2.5,
          Assignee: "Janet Leverling",
          RankId: 4,
          Color: "#E64A19",
          ClassName: "e-bug, e-critical, e-janet-leverling",
        },
        {
          Id: "Task 12",
          Title: "Task - 29017",
          Status: "Review",
          Summary: "Fix the issues reported in data binding.",
          Type: "Story",
          Priority: "Normal",
          Tags: ["Databinding"],
          Estimate: "3.5",
          Assignee: "Janet Leverling",
          RankId: 4,
          Color: "#02897B",
          ClassName: "e-story, e-normal, e-janet-leverling",
        },
        {
          Id: "Task 13",
          Title: "Task - 29018",
          Status: "Close",
          Summary: "Analyze SQL server 2008 connection.",
          Type: "Story",
          Priority: "Critical",
          Tags: ["Grid", "Sql"],
          Estimate: 2,
          Assignee: "Andrew Fuller",
          RankId: 4,
          Color: "#02897B",
          ClassName: "e-story, e-release, e-andrew-fuller",
        },
        {
          Id: "Task 14",
          Title: "Task - 29019",
          Status: "Validate",
          Summary: "Validate databinding issues.",
          Type: "Story",
          Priority: "Low",
          Tags: ["Validation"],
          Estimate: 1.5,
          Assignee: "Margaret hamilt",
          RankId: 1,
          Color: "#02897B",
          ClassName: "e-story, e-low, e-margaret-hamilt",
        },
        {
          Id: "Task 15",
          Title: "Task - 29020",
          Status: "Close",
          Summary: "Analyze grid control.",
          Type: "Story",
          Priority: "High",
          Tags: ["Analyze"],
          Estimate: 2.5,
          Assignee: "Margaret hamilt",
          RankId: 5,
          Color: "#02897B",
          ClassName: "e-story, e-high, e-margaret-hamilt",
        },
        {
          Id: "Task 16",
          Title: "Task - 29021",
          Status: "Close",
          Summary: "Stored procedure for initial data binding of the grid.",
          Type: "Others",
          Priority: "Critical",
          Tags: ["Databinding"],
          Estimate: 1.5,
          Assignee: "Steven walker",
          RankId: 6,
          Color: "#1F88E5",
          ClassName: "e-others, e-release, e-steven-walker",
        },
        {
          Id: "Task 17",
          Title: "Task - 29022",
          Status: "Close",
          Summary: "Analyze stored procedures.",
          Type: "Story",
          Priority: "Critical",
          Tags: ["Procedures"],
          Estimate: 5.5,
          Assignee: "Janet Leverling",
          RankId: 7,
          Color: "#02897B",
          ClassName: "e-story, e-release, e-janet-leverling",
        },
        {
          Id: "Task 18",
          Title: "Task - 29023",
          Status: "Validate",
          Summary: "Validate editing issues.",
          Type: "Story",
          Priority: "Critical",
          Tags: ["Editing"],
          Estimate: 1,
          Assignee: "Nancy Davloio",
          RankId: 1,
          Color: "#02897B",
          ClassName: "e-story, e-critical, e-nancy-davloio",
        },
        {
          Id: "Task 19",
          Title: "Task - 29024",
          Status: "Review",
          Summary: "Test editing functionality.",
          Type: "Story",
          Priority: "Normal",
          Tags: ["Editing", "Test"],
          Estimate: 0.5,
          Assignee: "Nancy Davloio",
          RankId: 5,
          Color: "#02897B",
          ClassName: "e-story, e-normal, e-nancy-davloio",
        },
        {
          Id: "Task 20",
          Title: "Task - 29025",
          Status: "Open",
          Summary: "Enhance editing functionality.",
          Type: "Improvement",
          Priority: "Low",
          Tags: ["Editing"],
          Estimate: 3.5,
          Assignee: "Andrew Fuller",
          RankId: 5,
          Color: "#673AB8",
          ClassName: "e-improvement, e-low, e-andrew-fuller",
        },
        {
          Id: "Task 21",
          Title: "Task - 29026",
          Status: "InProgress",
          Summary: "Improve the performance of the editing functionality.",
          Type: "Epic",
          Priority: "High",
          Tags: ["Performance"],
          Estimate: 6,
          Assignee: "Nancy Davloio",
          RankId: 5,
          Color: "#e91e64",
          ClassName: "e-epic, e-high, e-nancy-davloio",
        },
        {
          Id: "Task 22",
          Title: "Task - 29027",
          Status: "Open",
          Summary:
            "Arrange web meeting with the customer to show editing demo.",
          Type: "Others",
          Priority: "High",
          Tags: ["Meeting", "Editing"],
          Estimate: 5.5,
          Assignee: "Steven walker",
          RankId: 6,
          Color: "#1F88E5",
          ClassName: "e-others, e-high, e-steven-walker",
        },
        {
          Id: "Task 23",
          Title: "Task - 29029",
          Status: "Review",
          Summary: "Fix the editing issues reported by the customer.",
          Type: "Bug",
          Priority: "Low",
          Tags: ["Editing", "Fix"],
          Estimate: "3.5",
          Assignee: "Janet Leverling",
          RankId: 6,
          Color: "#E64A19",
          ClassName: "e-bug, e-low, e-janet-leverling",
        },
        {
          Id: "Task 24",
          Title: "Task - 29030",
          Status: "Testing",
          Summary: "Fix the issues reported by the customer.",
          Type: "Bug",
          Priority: "Critical",
          Tags: ["Customer"],
          Estimate: "3.5",
          Assignee: "Steven walker",
          RankId: 1,
          Color: "#E64A19",
          ClassName: "e-bug, e-critical, e-steven-walker",
        },
        {
          Id: "Task 25",
          Title: "Task - 29031",
          Status: "Testing",
          Summary: "Fix the issues reported in Safari browser.",
          Type: "Bug",
          Priority: "Critical",
          Tags: ["Fix", "Safari"],
          Estimate: 1.5,
          Assignee: "Nancy Davloio",
          RankId: 2,
          Color: "#E64A19",
          ClassName: "e-bug, e-release, e-nancy-davloio",
        },
      ],
      cards: [
        {
          headerText: "To Do",
          title: "Pre-fab homes",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          flex: 3,
        },
        {
          headerText: "In Progress",
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          flex: 3,
        },
        {
          headerText: "Testing",
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 3,
        },
        {
          headerText: "Done",
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 3,
        },
      ],
    };
  },
  computed: {
    getTasks() {
      var [...temp] = this.tasks;
      return temp.slice(0, 10);
    },
  },
};
</script>

<style lang="scss" src="./AdminToDo.scss" scoped></style>
