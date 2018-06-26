const apiCastFunctions = (function() {
  const baseAddress = "/api/routes/";
  function serverRequest(address, obj, type) {
    var xhr = new XMLHttpRequest();
    xhr.open(type || "GET", address, false);
    if (obj !== null) {
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(obj));
    } else {
      xhr.send();
    }
    if (xhr.status != 200) {
      return null;
    } else {
      return JSON.parse(xhr.responseText).result;
    }
  }

  function getRoutes() {
    const result = serverRequest(baseAddress, null, "GET");
    return result;
  }

  function removeRoute(id) {
    const result = serverRequest(baseAddress + id, null, "DELETE");
    return result;
  }

  function addRoute(name, from, to, time, transport) {
    const result = serverRequest(
      baseAddress + "create",
      { name, from, to, time, transport },
      "POST"
    );
    return result;
  }

  function updateRoute(obj) {
    const result = serverRequest(baseAddress + obj.id + "/update", obj, "POST");
    return result;
  }
  function restoreRoute(id) {
    const result = serverRequest(baseAddress + id + "/restore", null, "GET");
    return result;
  }
  return { getRoutes, addRoute, removeRoute, updateRoute, restoreRoute };
})();
