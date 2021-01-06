const log = {
    data() {
        return {
            time: 0,
        };
    },
    created() {
        if (!this.name) {
            throw new Error("need name!")
        }
        this.time = new Date();
        console.log(`${this.name}出生了`);
    },
    beforeDestroy() {
        const now = new Date();
        console.log(`${this.name}死亡了,共生存了：${now - this.time}ms`);
    },
}
export default log;