function CreateRandomNumber(min, max) {
    return Math.floor(Math.random()*(max -min ));
}

const game = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            specialAttackCharges: 0,
            gameover: false,
            winner: '',
            logs: []
        }
    },
    methods: {
        attackMonster() {
            let dameDealtToMonster = CreateRandomNumber(0, 6)
            this.addLogs('player', 'attacked', dameDealtToMonster);

            if (this.monsterHealth - dameDealtToMonster < 0) {
                this.monsterHealth = 0;
                this.gameover = true;
                this.winner = 'player';
            } else {
                this.monsterHealth = this.monsterHealth - dameDealtToMonster;
            }
            
            this.monsterDealDameToPlayer();

            this.specialAttackCharges++;
        },
        specialAttack() { 
            let specialAttackDame = CreateRandomNumber(10, 25);
            this.addLogs('player', 'used SPECIAL MOVE', specialAttackDame);

            if (this.monsterHealth - specialAttackDame < 0) {
                this.monsterHealth = 0;
                this.addLogs('monster', 'been slayed', 0);

                this.gameover = true;
                this.winner = 'player';

            } else {
                this.monsterHealth = this.monsterHealth - specialAttackDame;
            }

            this.monsterDealDameToPlayer();

            this.specialAttackCharges = 0;
        },
        heal() {
            let healingAmount = CreateRandomNumber(10, 20);
            this.addLogs('player', 'heal himself', healingAmount);

            if (this.playerHealth + healingAmount > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth = this.playerHealth + healingAmount;
            }

            this.monsterDealDameToPlayer();

            this.specialAttackCharges++;
        },
        monsterDealDameToPlayer() {
            let dameDealtToPlayer = CreateRandomNumber(0, 7);
            this.addLogs('monster', 'attacked', dameDealtToPlayer);

            if (this.playerHealth - dameDealtToPlayer < 0) {
                this.playerHealth = 0;
                this.addLogs('player', 'been slayed', 0);

                this.gameover = true;
                this.winner = 'monster';
            } else {
                this.playerHealth = this.playerHealth - dameDealtToPlayer;    
            }
        },
        surrender() {
            this.playerHealth = 0;
            this.addLogs('player', 'been slayed', 0);
            this.gameover = true;
            this.winner = 'monster';
            this.addLogs('The World', 'been ruled by monster forever', ' the darkness');
        },
        addLogs(who, what, value) {
            let currentAction = {
                who,
                what,
                value
            }

            this.logs.push(currentAction);
        }
    },
    computed: {
        monsterHealthBar() {
            if (this.monsterHealth < 0) {
                return {width: 0 + '%'}
            } else {
                return {width: this.monsterHealth + '%'}
            }
        },
        playerHealthBar() {
            if (this.playerHealth < 0) {
                return {width: 0 + '%'}
            } else {
                return {width: this.playerHealth + '%'}
            }
        }
    }
}).mount("#game");