import { _decorator, animation, Animation, AnimationComponent, Component, math, Node, ProgressBar, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Hand')
export class Hand extends Component {
    @property(Node)
    first_hand: Node;

    @property(Node)
    second_hand: Node;

    public temp_hour: number = new Date().getHours();
    public temp_minute: number = new Date().getMinutes();

    start() {
    }

    update(deltaTime: number) {
        this.changeTime();
    }

    changeTime()
    {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        this.second_hand.setRotationFromEuler(new Vec3(0,0,(hours/12 * 360) * -1));
        this.first_hand.setRotationFromEuler(new Vec3(0,0,(minutes/60 * 360) * -1));
        if (this.temp_minute != minutes)
        {
        this.first_hand.getComponentInChildren(Animation).play("shorten");
        }
        if (this.temp_hour != hours)
            this.second_hand.getComponentInChildren(Animation).play("longen");
        this.temp_hour = hours;
        this.temp_minute = minutes;
    }

    showTime()
    {
        const now = new Date();
        console.log(now);
    }
}


