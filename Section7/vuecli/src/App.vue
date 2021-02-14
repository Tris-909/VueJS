<template>
<div>
    <h1>{{ msg }}</h1>
    <smaller-text msg2="123"></smaller-text>
</div>
</template>
    
<script>
export default {
    data() {
        return {
            msg: 'Hi'
        }
    }
}
</script>