import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1'
})
export default class CharaEvent extends RpgEvent {
    onInit() {
    }

    onAction(player: RpgPlayer) {
       // here, the controls on the player
    }
}