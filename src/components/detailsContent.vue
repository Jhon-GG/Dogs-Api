<script>

</script>

<template>
    <div class="content">
        <div class="contImg">
            <img src="https://placedog.net/300/200?id=3" alt="Dog">
        </div>
        <div class="titleDt">
            <h1>Golden</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </div>
    </div>
</template>

<style>

    .content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 90vw;
        height: 85vh;
        margin-top: 20rem;
    }

    .contImg{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #FD9B10;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        width: auto;
        height: auto;
        padding: 1.5rem;
    }

    .contImg img{
        display: flex;
        width: 28vw;
        height: auto;
        border-radius: 10px; 
    }

    .titleDt{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 50vw;
        height: 68vh;
        margin-top: 0rem;
        font-family: 'Quicksand';
        color: #FD9B10;
        gap: 3rem;
        margin-bottom: 1rem;
    }

    .titleDt h1{
        font-size: 3rem;
    }
    .titleDt p{

        font-size: 1.2rem;
        color: #000;
        font-weight: bold;
        text-align: justify;
    }

    @media (max-width: 768px){
        .content{
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-around;
            align-items: center;
            width: 90vw;
            height: 86vh;
            margin-top: 20rem;
        }

        .contImg{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #FD9B10;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            width: auto;
            height: auto;
            padding: 1.5rem;
        }

        .contImg img{
            display: flex;
            width: 72vw;
            height: auto;
            border-radius: 10px; 
        }

        .titleDt{
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            width: 70vw;
            height: auto;
            margin-top: 1rem;
            font-family: 'Quicksand';
            color: #FD9B10;
            gap: 1rem;
        }

        .titleDt h1{
            font-size: 2.7rem;
            margin-bottom: 2rem;
        }
        .titleDt p{

            font-size: 1.2rem;
            color: #000;
            font-weight: bold;
            text-align: justify;
        }
    }
</style>