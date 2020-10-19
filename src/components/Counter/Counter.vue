<template>
    <div v-if="loaded">
        <section class="text-3xl flex mx-auto" >
            <h3>
                Remaining Time
            </h3>
        </section>
        <section class="flex text-6xl justify-center content-center">
                {{ displayHours }} hours <span class="leading-snug">:</span>
                {{ displayMinutes }} minutes <span class="leading-snug">:</span>
                {{ displaySeconds }} seconds
        </section>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: [
        'utcTimeString',
        'year',
        'month',
        'date',
        'hour',
        'minute',
        'second',
        'millisecond',
    ],
    data: () => ({
        displayDays: 0,
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0,
        loaded: false,
    }),
    /**
     * Computes the values for seconds, minutes, hours, days
     * given milliseconds
     */
    computed: {
        _seconds: () => 1000,
        _minutes() {
            return this._seconds * 60
        },
        _hours() {
            return this._minutes * 60
        },
        _days() {
            return this._hours * 60
        },
        end() {
            return this.utcTimeString ? 
            new Date(
                this.utcTimeString
            ) :
            new Date(
                this.year,
                this.month,
                this.date,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            );
        }
    },
    mounted() {
        this.showRemaining();
    },
    methods: {
        assignTimeValues() {
            if (this.utcTimeString) {
                const splitDate = this.utcTimeString.split(" ");
                this.year = splitDate[0];
                this.month = splitDate[1];
                this.date = splitDate[2];
                this.hour = splitDate[3];
                this.minute = splitDate[4];
                this.second = splitDate[5];
                this.millisecond = splitDate[6];
            }
            return;
        },
        formatNum(num) {
            return num < 10 ? '0' + num : num;
        },
        showRemaining() {
            const timer = setInterval(() => {
                const now = new Date();
                const nowUtcStrLen = now.toUTCString().length;
                const dateNoGMT = now.toUTCString().slice(0, nowUtcStrLen - 4);
                const convertedDate = new Date(dateNoGMT);
                const distance = this.end.getTime() - convertedDate.getTime();

                if (distance < 0) {
                    clearInterval(timer);
                    this.$emit('job-finished')
                    return;
                }

                const days = Math.floor((distance / this._days));
                const hours = Math.floor((distance % this._days) /this._hours);
                const minutes = Math.floor((distance % this._hours) /this._minutes);
                const seconds = Math.floor((distance % this._minutes) /this._seconds);

                this.displayMinutes = this.formatNum(minutes);
                this.displaySeconds = this.formatNum(seconds);
                this.displayHours = this.formatNum(hours);
                this.displayDays = this.formatNum(days);
                this.loaded = true;
            }, 1000);
        }
    }
}
</script>

<style scoped>

</style>