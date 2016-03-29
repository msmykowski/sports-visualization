const Dispatcher = {
  dispatch(event) {
    const methodToDispatch = this[event.type];
    methodToDispatch.call(this, event);
  },

  async fetchData() {
    const response = await fetch('http://localhost:3000/players');
    const data = await response.json();
    this.$store.refine('data').set(data);
  },

  updateIndex({data}) {
    this.$store.refine('dataIndex').set(data);
  },

  reset() {
    const dispatchKeys = Object.keys(Dispatcher);
    Object.keys(SingletonDispatcher).forEach(key => {
      if(!dispatchKeys.includes(key)) {
        delete SingletonDispatcher[key];
      } else {
        SingletonDispatcher[key] = Dispatcher[key];
      }
    });
  }
};

const SingletonDispatcher = {...Dispatcher};

module.exports = SingletonDispatcher;
