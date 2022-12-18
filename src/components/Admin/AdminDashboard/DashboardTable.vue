<template>
  <div>
    <v-card-text class="pa-0">
      <v-simple-table>
        <template v-slot:default>
          <thead class="pl-2">
            <tr>
              <th class="text-left pa-6">NAME</th>
              <th class="text-left">EMAIL</th>
              <th class="text-left">PRODUCT</th>
              <th class="text-left">PRICE</th>
              <th class="text-left">DATE</th>
              <th class="text-left">CITY</th>
              <th class="text-left">STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in table" :key="item.name">
              <td class="pa-6">{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.product }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.city }}</td>
              <td v-if="item.status === 'Sent'">
                <v-chip link color="success" class="ma-2 ml-0"> Sent </v-chip>
              </td>
              <td v-else-if="item.status === 'Pending'">
                <v-chip link color="warning" class="ma-2 ml-0">
                  Pending
                </v-chip>
              </td>
              <td v-else-if="item.status === 'Declined'">
                <v-chip link color="secondary" class="ma-2 ml-0">
                  Declined
                </v-chip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: "DashboardTable",
  data() {
    return {
      table: [
        {
          id: 0,
          name: "Mark Otto",
          email: "ottoto@wxample.com",
          product: "Great Horns Think Alike Junior Socks",
          price: "$25 224.2",
          date: "11 May 2022",
          city: "Otsego",
          status: "Sent",
        },
        {
          id: 1,
          name: "Jacob Thornton",
          email: "thornton@wxample.com",
          product: "Tiny Planet",
          price: "$1 254.2",
          date: "4 Jun 2022",
          city: "Fivepointville",
          status: "Sent",
        },
        {
          id: 2,
          name: "Larry the Bird",
          email: "bird@wxample.com",
          product: "Corgi-bunga! Youth Crew Socks",
          price: "$1 570.0",
          date: "27 Aug 2022",
          city: "Leadville North",
          status: "Pending",
        },
        {
          id: 3,
          name: "Joseph May",
          email: "josephmay@wxample.com",
          product: "Keep Dreamin’ Toddler Knee Socks",
          price: "$5 224.5",
          date: "19 Feb 2022",
          city: "Seaforth",
          status: "Declined",
        },
        {
          id: 4,
          name: "Peter Horadnia",
          email: "horadnia@wxample.com",
          product: "Daisy Garden",
          price: "$43 594.7",
          date: "1 Mar 2022",
          city: "Hanoverton",
          status: "Sent",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
