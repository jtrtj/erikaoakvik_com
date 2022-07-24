/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4`}>
    <div class={tw`shrink-0`}>
      <img
        class={tw`h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo`}
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      </div>
      <div>
      <div class={tw`text-xl font-medium text-black`}>Erika Oakvik</div>
      <p class={tw`text-slate-500`}>under construction</p>
      </div>
    </div>
  );
}
// <Counter start={3} />

