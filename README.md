# Angular Workshop: Component outputs

In this task we'd like to notify the parent component `AppComponent` on each click on the `ProfilePictureComponent`.

---

### **1. Introduce the output `profilePictureClicked` as member of the `ProfilePictureComponent`.**

The Payload of this event is the _pictureUrl_.

Hint:
```ts
profilePictureClicked = output<string>()
```

### **2. Emit, whenever the user clicks on the `<img>` element.**

Hint:
`profile-picture.component.html`:

```html
<img [src]="..." (click)="pictureClicked()">
```

`profile-picture.component.ts`:
```ts
pictureClicked() {
  // implement me
}
```

### **3. Receive the `profilePictureClicked` event in the `AppComponent`.**

`console.log(...)` the received `pictureUrl`.

Hint:
`app.component.html`:
```html
<app-profile-picture [pictureUrl]="..." (profilePictureClicked)="profilePictureClicked($event)">
```
