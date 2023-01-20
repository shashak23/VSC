console.log(x);  // error

// let으로 선언된 경우에는 hoisting은 일어나지만
// 1페를 넘어가서 초기화 될 때까지 사용할 수 없어요
// 실제 x를 사용할 수 있게 되는 시점은 x를 초기화한 이후부터.....

// x가 초기화가 될 때까지 빈 공간이 생기는데 이걸 "Temporal Dead Zone(TDZ)" 라고 부름

let x = 100;