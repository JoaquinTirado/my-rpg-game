import { RpgPlayer, RpgPlayerHooks, Control, Components } from '@rpgjs/server'

const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.name = 'GM Jetta'
        player.setComponentsTop(Components.text('{name}', {
            fill: 'blue',
            fontSize: 20 
        })),
         {
            height: 30,
            width: 100,
            marginBottom: -5,
        }
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    onJoinMap(player: RpgPlayer) {
        player.gui('my-hud').open() // Here, open the HUD after loading the map
    }
}

export default player