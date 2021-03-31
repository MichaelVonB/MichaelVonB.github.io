import { State } from "vue";
import { Training } from "../../../trainings/training.model";
import { CommitFunction } from "../../types";


const trainings: Training[] = [{
  id: 1,
  time: new Date(2021,3,14),
  players: 10,
  maxPlayers: 12,
  location: 'Sporthalle am Michel'
},
{
  id: 2,
  time: new Date(),
  players: 4,
  maxPlayers: 12,
  location: 'Sporthalle am Stadtpark'
},
{
  id: 3,
  time: new Date(),
  players: 4,
  maxPlayers: 12,
  location: 'Sporthalle am Stadtpark'
},
{
  id: 4,
  time: new Date(),
  players: 4,
  maxPlayers: 12,
  location: 'Sporthalle am Stadtpark'
},
{
  id: 5,
  time: new Date(),
  players: 4,
  maxPlayers: 12,
  location: 'Sporthalle am Stadtpark'
},
{
  id: 6,
  time: new Date(),
  players: 4,
  maxPlayers: 12,
  location: 'Sporthalle am Stadtpark'
},
{
  id: 7,
  time: new Date(),
  players: 4,
  maxPlayers: 12,
  location: 'Sporthalle am Stadtpark'
},
{
  id: 8,
  time: new Date(),
  players: 4,
  maxPlayers: 12,
  location: 'Sporthalle am Stadtpark'
},
{
  id: 9,
  time: new Date(),
  players: 4,
  maxPlayers: 12,
  location: 'Sporthalle am Stadtpark'
},
{
  id: 10,
  time: new Date(),
  players: 4,
  maxPlayers: 12,
  location: 'Sporthalle am Stadtpark'
}]

interface TrainingsState{
  trainings: Training[]
}

const state: TrainingsState = {
  trainings
}
export default {
  state: () => ({
    state
  }),

  getters: {
    trainings: (state: {state: TrainingsState}) => state.state.trainings
  },
  mutations: {
    ADDTRAINING(state: {state: TrainingsState}, payload: Training) {
      console.log(state.state.trainings, 'store state');
      state.state.trainings.push(payload);
    },
    DELETETRAINING(state: {state: TrainingsState}, payload: number) {
      state.state.trainings = state.state.trainings.filter((t: Training) => {
        return t.id !== payload;
      });

    }
  },
  actions: {
    addTraining({ commit } : CommitFunction, payload: Training) {
      commit('ADDTRAINING', payload);
    },
    deleteTraining({commit } : { commit: any}, payload: number) {
      commit('DELETETRAINING', payload);
    }
  },
};



// export namespace TrainingActions {
  export const TrainingAction = {
    addTraining : 'addTraining',
    deleteTraining : 'deleteTraining'

  }

// }