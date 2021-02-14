<template>
<div>
    <h3 id="red">{{msg2}}</h3>
</div>
</template>

<script>
export default {
    props: ['msg2']
}
</script>

<style>
#red {
    color: red;
}
</style>