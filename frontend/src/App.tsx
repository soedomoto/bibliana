import { Nav } from '@/components/app/nav'
import { cn } from '@/components/lib/utils'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'
import {
  AlertCircle,
  Archive,
  CalendarIcon,
  File,
  Inbox,
  MessagesSquare,
  Plus,
  Send,
  ShoppingCart,
  Trash2,
  Users2
} from 'lucide-react'
import React from 'react'
import { Environment, EnvironmentInfo } from '../wailsjs/runtime/runtime'
import { DataTable } from './components/app/data-table'
import Search from './components/app/search'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Button } from './components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './components/ui/hover-card'
// import { DataTable } from './components/app/data-table'

function App({
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false
}) {
  const [env, setEnv] = React.useState<EnvironmentInfo>()
  const [isCollapsed] = React.useState(defaultCollapsed)

  React.useEffect(() => {
    (async () => {
      let env = await Environment();
      setEnv(env);
    })();
  }, [])

  return (
    <div className='h-full flex flex-col'>
      <div className='drag-handler flex justify-center flex-grow-0 p-1 bg-card/50'>
        <Search />
      </div>
      <div className='flex flex-grow'>
        <div className={cn('drag-handler bg-card/50 flex-grow-0 flex flex-col justify-between px-4 pb-4', env?.platform == 'darwin' && '')}>
          <div className='flex flex-col gap-4 mx-auto'>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button className='h-10 w-10'>AP</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80" side='right'>
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      The React Framework – created and maintained by @vercel.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <Button className='h-10 w-10'>AP</Button>
            <Button className='h-10 w-10'>AP</Button>
            <Button className='h-10 w-10'>AP</Button>
            <Button className='h-10 w-10'>AP</Button>
            <Button className='h-10 w-10'>AP</Button>
          </div>
          <div className='flex flex-col gap-4 mx-auto'>
            <Avatar>
              <AvatarFallback><Plus /></AvatarFallback>
            </Avatar>
            <Button className='h-10 w-10'>AP</Button>
          </div>
        </div>
        <Separator orientation='vertical' />
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
          }}
          className="h-full items-stretch"
        >
          <ResizablePanel
            defaultSize={defaultLayout[0]}
            // collapsedSize={navCollapsedSize}
            // collapsible={true}
            // minSize={15}
            // maxSize={20}
            className={cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')}
          >
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: 'Inbox',
                  label: '128',
                  icon: Inbox,
                  variant: 'default'
                },
                {
                  title: 'Drafts',
                  label: '9',
                  icon: File,
                  variant: 'ghost'
                },
                {
                  title: 'Sent',
                  label: '',
                  icon: Send,
                  variant: 'ghost'
                },
                {
                  title: 'Junk',
                  label: '23',
                  icon: Archive,
                  variant: 'ghost'
                },
                {
                  title: 'Trash',
                  label: '',
                  icon: Trash2,
                  variant: 'ghost'
                },
                {
                  title: 'Archive',
                  label: '',
                  icon: Archive,
                  variant: 'ghost'
                }
              ]}
            />
            <Separator />
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: 'Social',
                  label: '972',
                  icon: Users2,
                  variant: 'ghost'
                },
                {
                  title: 'Updates',
                  label: '342',
                  icon: AlertCircle,
                  variant: 'ghost'
                },
                {
                  title: 'Forums',
                  label: '128',
                  icon: MessagesSquare,
                  variant: 'ghost'
                },
                {
                  title: 'Shopping',
                  label: '8',
                  icon: ShoppingCart,
                  variant: 'ghost'
                },
                {
                  title: 'Promotions',
                  label: '21',
                  icon: Archive,
                  variant: 'ghost'
                }
              ]}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
            <div className="flex items-center px-4 py-2">
              <DataTable />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={defaultLayout[2]}></ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

export default App
