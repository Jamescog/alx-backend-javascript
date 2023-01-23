#!/usr/bin/node

export function tastFirst() {
  const task = "I prefer const when I can.";

  return task;
}

export function getLast() {
  let combination = "But sometimes let";
  combination += getLast();

  return combination;
}
