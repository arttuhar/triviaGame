<script setup>
    import { ref } from 'vue';
    const toggleOptions = ref(false);
</script>

<template>
    <div class="startScreen">
        <div class="startInputs">
            <input type="text" class="startInput" placeholder="Player name">
            <button class="startButton">Start</button>
            <button @click="toggleOptions = !toggleOptions" class="optionsButton">Options</button>
            <div v-show="toggleOptions">
                <select class="options"></select>
                <select class="options"></select>
                <select class="options"></select>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .startScreen {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #0077b6;
    }
    .startInputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgb(255, 255, 255,0.8);
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 5px 6px rgba(0,0,0,0.23);
    }
    .startInput {
        width: 100%;
        height: 40px;
        margin: 20px;
        border-radius: 8px;
        border: none;
        font-size: 20px;
        padding: 10px 15px;
        text-align: center;
    }
    .startInput:focus {
        outline: none;
    }
    .startButton {
        width: 90%;
        margin: 0 20px 20px 20px;
        height: 35px;
        border: none;
        border-radius: 8px;
        font-size: 20px;
        cursor: pointer;
        background-color: #0096c7;
        color: #fafafa;
    }
    .startButton:hover {
        background-color: #00b4d8;
    }
    .optionsButton {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
    .options {
        width: 80%;
        height: 25px;
        margin: 10px;
    }
    .options:focus {
        outline: none;
    }
</style>