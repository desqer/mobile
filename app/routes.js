import React from 'react'
import { Actions, Scene } from 'react-native-router-flux';

/**
 * Global
 */
import Header from 'app/scenes/calendar/components/Header'

/**
 * Sign
 */
import SignPhone from 'app/scenes/sign/scenes/signphone'
import SignUp from 'app/scenes/sign/scenes/signup'
import SignIn from 'app/scenes/sign/scenes/signin'

/**
 * Appointments
 */
import Calendar from 'app/scenes/calendar'
import Detail from 'app/scenes/calendar/scenes/detail'
import New from 'app/scenes/calendar/scenes/new'

/**
 * Tab icons
 */
import {
  ProfileIcon,
  DesqerIcon,
  HistoryIcon
} from 'app/common/components/Footer'

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="signPhone" component={SignPhone} initial={true} />
    <Scene key="signUp" component={SignUp} />
    <Scene key="signIn" component={SignIn} />

    <Scene
      key="app"
      tabs={true}
      tabBarStyle={{ height: 60, backgroundColor: '#BE446D' }}
    >
      <Scene key="profile" navBar={Header} component={New} title="Minha conta" icon={ProfileIcon} />
      <Scene key="appointments" navBar={Header} icon={DesqerIcon}>
        <Scene key="calendarIndex" component={Calendar} />
        <Scene key="calendar" navBar={Header}>
          <Scene key="show" component={New} title="Detalhe do evento" />
        </Scene>
        <Scene key="newAppointment" component={New} title="Criar serviço" />
      </Scene>
      <Scene key="history" navBar={Header} component={SignUp} title="Histórico" icon={HistoryIcon} />
    </Scene>
  </Scene>
)

export default scenes
