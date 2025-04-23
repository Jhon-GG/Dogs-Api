<script>

</script>

<template>
     <div class="middle">
        <div class="explore">
            <h1>Explore about <br> <span>DOGS <br> AND <br> PUPPIES</span></h1>
        </div>
        <div class="breeds">
            <div class="back"></div>
            <div class="card">
                <h1>Explore<br>breeds</h1>
                <p>Explore all kind of breeds, as well as some information about that.</p>
                <a href="#breeds-section">
                    <button>BREEDS</button>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>

* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Quicksand';
            overflow-x: hidden;
        }

        .middle {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 86vh;
            background-image: url("../assets/puppies1.jpg");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            margin: 0.5rem auto;
            position: relative;
            max-width: 1400px;
            padding: 2rem;
            font-family: 'Quicksand';
        }

        .explore {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            width: 100%;
            max-width: 1200px;
            margin-left: auto;
            padding-right: 5%;
        }

        .explore h1 {
            color: #fff;
            font-weight: 500;
            font-size: clamp(1rem, 2vw, 1.3rem);
            text-align: right;
        }

        .explore span {
            color: #fff;
            font-weight: bold;
            font-size: clamp(1.5rem, 3vw, 2.2rem);
            line-height: 1.2;
        }

        .breeds {
            position: relative;
            width: min(90%, 350px);
            margin-top: auto;
            margin-bottom: 5%;
            margin-left: 5%;
            height: min(40%, 250px);
        }

        .back {
            position: absolute;
            background-color: #FD9B10;
            width: 100%;
            height: 100%;
            top: 1rem;
            left: 1rem;
            z-index: 0;
        }

        .card {
            position: relative;
            background-color: #fff;
            width: 100%;
            height: 100%;
            z-index: 1;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
        }

        .card h1 {
            font-size: clamp(1.2rem, 4vw, 1.6rem);
            text-align: center;
            margin-bottom: 0.5rem;
        }

        .card p {
            font-size: clamp(0.9rem, 2vw, 1rem);
            margin-bottom: auto;
        }

        .card a {
            text-decoration: none;
            margin-top: auto;
            align-self: center;
        }

        .card button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: clamp(120px, 50%, 150px);
            padding: 0.75rem 1rem;
            border: none;
            background-color: #FD9B10;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .card button:hover {
            background-color: #ff9500;
        }

        @media (max-width: 768px) {
            .middle {
                width: 90vw;
                padding: 1rem;
                height: 85vh;
            }

            .explore {
                display: flex;
                padding-right: 2%;
                justify-content: flex-end;
                align-items: flex-end;
            }

            .breeds {
                width: 90%;
                max-width: none;
                margin-top: auto;
                margin-bottom: 10%;
            }
        }

        @media (max-width: 480px) {
            .middle {
                width: 90vw;
                background-position: 30% center;
            }
            .explore {

                align-items: flex-start;
                padding-left: 2%;
                padding-right: 0;
            }

            .explore h1 {
                text-align: left;
            }
            .breeds {

                margin-left: auto;
                margin-right: auto;
                width: 90%;
                height: max(30%, 180px);
            }
        }

</style>