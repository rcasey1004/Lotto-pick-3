self.addEventListener('fetch', function(event) {
  // This is the "brain" that makes Chrome see this as a real App.
  event.respondWith(fetch(event.request));
});
