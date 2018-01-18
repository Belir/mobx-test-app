import { observable, action, computed } from "mobx";

class changeStore {
  @observable input = '';

  @computed get helloMessage() {
    return `${input} witaj!`
  }

  @action changeInput(newInput) {
    this.input = newInput;
  }
}

export default new changeStore();
