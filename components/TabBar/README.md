Switches the inspector between tool, memory and parameter views.

```jsx
<TabBar tabs={[{id:'tools',label:'Tools (3)'},{id:'memory',label:'Memory'},{id:'params',label:'Params'}]}
        value={tab} onChange={setTab} />
```

Tabs fill their container equally; the active tab gains a container fill, not an underline.
