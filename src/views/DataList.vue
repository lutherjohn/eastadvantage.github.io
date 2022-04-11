<template>
  <div>
    <Navigation/>
    <h1>Events Listing</h1>

    <router-link :to="{ name: 'event-show', params: { id: '1'} }">
      Event #1
    </router-link>
    <EventCard />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation"
import EventCard from "@/components/EventCard";
export default {
  name: "DataList",
  components: {
    Navigation,
    EventCard
  }
}
</script>

<style scoped>

</style>