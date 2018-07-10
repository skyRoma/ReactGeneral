function handleMouseDown(event) {
  let currentRemoveDroppable = null;
  let currentSaveDroppable = null;
  const result = document.querySelector('.result');
  const fakeResult = document.createElement('span');
  const shiftX = event.clientX - result.getBoundingClientRect().left;
  const shiftY = event.clientY - result.getBoundingClientRect().top;

  fakeResult.innerHTML = result.innerHTML;
  fakeResult.style.position = 'absolute';
  fakeResult.style.zIndex = 1000;
  fakeResult.style.fontSize = '25px';
  document.body.append(fakeResult);

  const moveAt = (pageX, pageY) => {
    fakeResult.style.left = `${pageX - shiftX }px`;
    fakeResult.style.top = `${pageY - shiftY }px`;
  };

  moveAt(event.pageX, event.pageY);

  const onMouseMove = (event) => {
    moveAt(event.pageX, event.pageY);
    fakeResult.hidden = true;
    const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    fakeResult.hidden = false;
    if (!elemBelow) return;
    const removeDroppableBelow = elemBelow.closest('.droppableRemove');
    const saveDroppableBelow = elemBelow.closest('.droppableSave');

    if (currentSaveDroppable !== saveDroppableBelow || currentRemoveDroppable !== removeDroppableBelow) {
      //leave
      if (currentSaveDroppable) {
        this.setState({
          saveActive: false,
        });
      }
      if (currentRemoveDroppable) {
        this.setState({
          recycleBinActive: false,
        });
      }
      currentSaveDroppable = saveDroppableBelow;
      currentRemoveDroppable = removeDroppableBelow;
      //enter
      if (currentSaveDroppable) {
        this.setState({
          saveActive: true,
        });
      }
      if (currentRemoveDroppable) {
        this.setState({
          recycleBinActive: true,
        });
      }
    }
  };

  document.addEventListener('mousemove', onMouseMove);

  const onMouseUp = () => {
    if (currentRemoveDroppable) {
      this.props.dropRemove();
      this.setState({ recycleBinActive: false });
    }
    if (currentSaveDroppable) {
      fetch('/api/post', {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        },
        body: `counter=${this.props.counter}`,
      })
        .catch(function (error) {  
          console.log('Request failed', error);  
        });
      this.setState({ saveActive: false });
    }
    document.body.removeChild(fakeResult);
    document.removeEventListener('mousemove', onMouseMove);
    fakeResult.removeEventListener('mouseup', onMouseUp);
  };

  fakeResult.addEventListener('mouseup', onMouseUp);
}

export default handleMouseDown;
