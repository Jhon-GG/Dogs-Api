<script>

</script>

<template>
    <div class="middle">
        <div class="explore">
            <h1>Explore about <span>DOGS <br> AND <br> PUPPIES</span></h1>
        </div>
        <div class="breeds">
            <div class="back">
                <div class="card">
                    <h1>Explore <br> breeds</h1> <br>
                    <p>Explore all kind of breeds, as well as some information about that.</p>
                    <a href="#breeds-section">
                        <button>BREEDS</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .middle{
        display: flex;
        flex-direction: column;
        width: 90vw;
        height: 86vh;
        background-image: url('../assets/puppies1.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: .5rem;
    }

    .explore{
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 77rem;
        height: 18rem;
        background-color: transparent;
        margin-top: 2rem;
    }

    .explore h1{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        width: auto;
        height: auto;
        color: #fff;
        font-family: 'Quicksand';
        font-weight: 500;
        font-size: 1.3rem;
        background-color: transparent;
    }

    .explore span{
        display: flex;
        background-color: transparent;
        color: #fff;
        width: auto;
        height: auto;
        font-family: 'Quicksand';
        font-weight: bold;
        font-size: 2.2rem;
    }

    .breeds{
        display: flex;
        background-color: transparent;
        width: 20vw;
        height: 35vh;
        margin-left: 1.4rem;
    }

    .back{
        position: absolute;
        background-color: #FD9B10;
        width: 20vw;
        height: 37vh;
        z-index: 0;
    }

    .card{
        position: relative;
        background-color: #fff;
        width: 20vw;
        height: 35vh;
        margin-left: 1.5rem;
        bottom: 1.5rem;
        z-index: 1;
        font-family: 'Quicksand';
        padding-top: 1rem;
    }

    .card h1{
        display: flex;
        background-color: transparent;
        width: auto;
        height: auto;
        margin-left: 6.5rem;
        font-size: 1.6rem;
    }

    .card p{
        display: flex;
        background-color: transparent;
        width: 16rem;
        height: auto;
        font-size: 1rem;
        margin-left: 1.5rem;
    }

    .card button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 9rem;
        height: 2.5rem;
        margin-left: 4.8rem;
        margin-top: 3rem;
        border: none;
        background-color: #FD9B10;
        color: #fff;
        font-weight: bold;
    }

    .card button:hover{
        cursor: pointer;
        background-color: #ff9500;
    }

    .card a{
        text-decoration: none;
    }
</style>