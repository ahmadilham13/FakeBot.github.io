const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let quest = 0

const botSay = (data) => {
    return [
        "Halo, perkenalkan nama saya ILMBot, Siapa nama kamu ?",
        `Hallo ${data?.nama}, berapa usia kamu?`,
        `ooo ${data?.usia}, hobi kamu apa?`,
        `waahhh!! sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
        `ohhh ${data?.pacar}, ya udah kalo gitu udahan ya`
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    quest++
    if(quest === 1) {
       botDelay({nama: jawaban.value})
    } else if(quest === 2) {
       botDelay({usia: jawaban.value})
    } else if(quest === 3) {
       botDelay({hobi: jawaban.value})
    } else if(quest === 4) {
       botDelay({pacar: jawaban.value})
    } else if(quest === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    console.log({usersData: usersData})
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[quest]
    }, [1500])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thenkyu ya ${usersData[0]} udah mau main ke ILMBot`
    jawaban.value = "siap thanks juga"
}

function botEnd() {
    window.location.reload()
    jawaban.value = ""
}