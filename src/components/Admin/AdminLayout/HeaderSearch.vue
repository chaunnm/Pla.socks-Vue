<template>
    <form action="#">
        <label :data-state="state">
            <input type="text" placeholder="Search" @click="state = 'open'" @blur="state = 'close'" />
            <v-icon color="#FFFFFF" size="28">mdi-magnify</v-icon>
        </label>
    </form>
</template>

<script>
// import config from '../../config';

export default {
    name: 'HeaderSearch',
    data() {
        return {
            // config,
            state: "close"
        }
    },
}

</script>
<style lang="scss" scoped>
label {
    
        display: inline-block;

    // display: none;
    position: relative;
    background-color: transparent;
    padding: 5px 12px;
    transition: all 300ms ease;
    border-radius: 0;

    input {
        transition: width 0.3s ease, opacity 0.3s ease 0.3s;
        opacity: 1;
        margin-left: 10px;
        margin-right: -25px;
        padding: 0 15px;
        background-color: rgba(255, 255, 255, 0.445);
        width: 230px;
        height: 35px;
        border: 0;
        border-radius: 30px;
        outline: none;
        color: white;

        &::placeholder {
            color: #b9b9b9;
            font-weight: 400;
            font-size: 16px;
        }
    }

    i {
        position: absolute;
        right: 10px;
        color: rgba(255, 255, 255, 0.849);
        cursor: pointer;

    }

    &[data-state="close"] {
        border-radius: 30px;
        padding: 5px 5px;
        transition: all .3s ease;

        &::after {
            width: 0;
            transition: all .3s ease;
        }

        i {
            pointer-events: none;
        }

        input {
            width: 28px;
            height: 35px;
            opacity: 0;
            cursor: pointer;
            transition: opacity .3s ease, width .3s ease;
            -webkit-appearance: none
        }
    }
}
</style>