import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import {add} from "@workspace/math/mathUtils";
export default function Page() {
  
  const result  = add

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        <Input  type="text" placeholder="Type something..." />
        <Input type="email" placeholder="enter your email"/>

      </div>
    </div>
  )
}
