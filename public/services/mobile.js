$("#clientDate").val(new Date()); 
let max = Number(document.querySelector(".count").innerHTML);
let ct = 2;
let ans = [];

class Carousel {

    constructor(element) {

        this.board = element

        // add first card programmatically
        this.push(1)

        // handle gestures
        this.handle()

    }

    handle() {

        // list all cards
        this.cards = this.board.querySelectorAll('.card')

        // get top card
        this.topCard = this.cards[this.cards.length - 1]

        // get next card
        this.nextCard = this.cards[this.cards.length - 2]

        // if at least one card is present
        if (this.cards.length > 0) {

            // set default top card position and scale
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'

            // destroy previous Hammer instance, if present
            if (this.hammer) this.hammer.destroy()

            // listen for tap and pan gestures on top card
            this.hammer = new Hammer(this.topCard)
            this.hammer.add(new Hammer.Tap())
            this.hammer.add(new Hammer.Pan({
                position: Hammer.position_ALL,
                threshold: 0
            }))

            // pass events data to custom callbacks
            this.hammer.on('tap', (e) => {
                this.onTap(e)
            })
            this.hammer.on('pan', (e) => {
                this.onPan(e)
            })

        }

    }

    onTap(e) {

        // get finger position on top card
        let propX = (e.center.x - e.target.getBoundingClientRect().left) / e.target.clientWidth

        // // get rotation degrees around Y axis (+/- 15) based on finger position
        // let rotateY = 15 * (propX < 0.05 ? -1 : 1)

        // enable transform transition
        this.topCard.style.transition = 'transform 100ms ease-out'

        // apply rotation around Y axis
        this.topCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'

        // wait for transition end
        setTimeout(() => {
            // reset transform properties
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
        }, 100)

    }

    onPan(e) {

        if (!this.isPanning) {

            this.isPanning = true

            // remove transition properties
            this.topCard.style.transition = null
            if (this.nextCard) this.nextCard.style.transition = null

            // get top card coordinates in pixels
            let style = window.getComputedStyle(this.topCard)
            let mx = style.transform.match(/^matrix\((.+)\)$/)
            this.startPosX = mx ? parseFloat(mx[1].split(', ')[4]) : 0
            this.startPosY = mx ? parseFloat(mx[1].split(', ')[5]) : 0

            // get top card bounds
            let bounds = this.topCard.getBoundingClientRect()

            // get finger position on top card, top (1) or bottom (-1)
            this.isDraggingFrom =
                (e.center.y - bounds.top) > this.topCard.clientHeight / 2 ? -1 : 1

        }

        // get new coordinates
        let posX = e.deltaX + this.startPosX
        let posY = e.deltaY + this.startPosY

        // get ratio between swiped pixels and the axes
        let propX = e.deltaX / this.board.clientWidth
        let propY = e.deltaY / this.board.clientHeight

        // get swipe direction, left (-1) or right (1)
        let dirX = e.deltaX < 0 ? -1 : 1

        // get degrees of rotation, between 0 and +/- 45
        let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45

        // get scale ratio, between .95 and 1
        let scale = (95 + (5 * Math.abs(propX))) / 100

        // move and rotate top card
        this.topCard.style.transform =
            'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(0deg) rotateY(0deg) scale(1)'

        // scale up next card
        if (this.nextCard) this.nextCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(' + scale + ')'

        if (e.isFinal) {

            this.isPanning = false

            let successful = false

            // set back transition properties
            this.topCard.style.transition = 'transform 200ms ease-out'
            if (this.nextCard) this.nextCard.style.transition = 'transform 100ms linear'

            // check threshold and movement direction
            if (propX > 0.15 && e.direction == Hammer.DIRECTION_RIGHT) {
                ans.push(3)
                successful = true
                // get right border position
                posX = this.board.clientWidth

            } else if (propX < -0.15 && e.direction == Hammer.DIRECTION_LEFT) {
                ans.push(1)
                successful = true
                // get left border position
                posX = -(this.board.clientWidth + this.topCard.clientWidth)

            } else if (propY < -0.10 && e.direction == Hammer.DIRECTION_UP) {
                ans.push(2)
                successful = true
                // get top border position
                posY = -(this.board.clientHeight + this.topCard.clientHeight)

            } else if (propY > 0.10 && e.direction == Hammer.DIRECTION_DOWN) {
                ans.push(4)
                successful = true
                // get bottom border position
                posY = (this.board.clientHeight + this.topCard.clientHeight)

            }

            if (successful) {
                // throw card in the chosen direction
                this.topCard.style.transform =
                    'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(0deg)'

                // wait transition end
                setTimeout(() => {
                    // remove swiped card
                    this.board.removeChild(this.topCard)
                    // add new card
                    this.push(ct);
                    ct++;
                    // handle gestures on new top card
                    this.handle()
                }, 200)

            } else {

                // reset cards position and size
                this.topCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
                if (this.nextCard) this.nextCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)'

            }

        }

    }

    push(count) {
        if(count>max){
        $(".choices").attr("hidden",true);
        setTimeout(renderInput,100)
        return;
        }
        let card = document.createElement('div');
        card.classList.add('card')
        let qtn = document.querySelector(`.q${count}`).innerHTML;
        if($("#test-name").val() == "Depression" && `q${count}` == "q6"){
            card.innerHTML = `<div class="question" style="font-size:15px;">${qtn}</div>`;
        }else if($("#test-name").val() == "OCD" && (`q${count}` == "q3" || `q${count}` == "q6")){
            card.innerHTML = `<div class="question" style="font-size:14px;">${qtn}</div>`;
        }else if($("#test-name").val() == "PTSD" && $("#help-name").val() == "want" && `q${count}` == "q1"){
            card.innerHTML = `<div class="question popup" onclick="myFunction(1)">${qtn} 🛈 <span class="popuptext" id="myPopup1">experience emotions that you felt during trauma? Able to see videos or Images of what happened? Experience physical sensations such as pain or pressure that you experienced during the trauma? Notice sounds/noises, smell or tastes that remind you of the trauma</span></div>`
        }else if($("#test-name").val() == "PTSD" && $("#help-name").val() == "want" && `q${count}` == "q19"){
            card.innerHTML = `<div class="question popup" onclick="myFunction(2)">${qtn} 🛈 <span class="popuptext" id="myPopup2">such as looking after yourself, liking your job, maintaining friendships/ relationships, making decisions, remembering things etc.</span></div>`
        }else if($("#test-name").val() == "PTSD" && $("#help-name").val() == "to" && `q${count}` == "q1"){
            card.innerHTML = `<div class="question popup" onclick="myFunction(1)">${qtn} 🛈 <span class="popuptext" id="myPopup1">experience emotions that he/she felt during trauma? Able to see videos or Images of what happened? Experience physical sensations such as pain or pressure that he/she experienced during the trauma? Notices sounds/noises, smells, or tastes that remind him/her of the trauma</span></div>`
        }else if($("#test-name").val() == "PTSD" && $("#help-name").val() == "to" && `q${count}` == "q19"){
            card.innerHTML = `<div class="question popup" onclick="myFunction(2)">${qtn} 🛈 <span class="popuptext" id="myPopup2">such as looking after himself/herself, liking his/her job, maintaining friendships/ relationships, making decisions, remembering things, coping with change, or simply enjoying his/her leisure time, etc?</span></div>`
        }else{
            card.innerHTML = `<div class="question">${qtn}</div>`
        }     

        this.board.insertBefore(card, this.board.firstChild)

    }

}

let board = document.querySelector('#board')
let carousel = new Carousel(board)

function renderInput(){
    ans.forEach((ele,index)=>{
        $(`#q${index+1}`).val(ele); 
    })
    $(".input").removeAttr("hidden")

}


function myFunction(n) {
    var popup = document.getElementById(`myPopup${n}`);
    popup.classList.toggle("show");
  }