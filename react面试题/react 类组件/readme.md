# react类组件中为什么要使用bind改变this指向
- 因为类中自动开启严格模式， 严格模式下this自动指向undifine而不是全局变量in