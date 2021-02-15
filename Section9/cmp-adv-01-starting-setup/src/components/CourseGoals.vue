<template>
    <ul>
        <li
            v-for="(goal,index) in goals"
            :key="index"
        >{{goal}} <slot></slot></li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Finish the course', 'Learn Vue']
        }
    }
}
</script>