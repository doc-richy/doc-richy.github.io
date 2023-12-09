/**
 * All types define in this file
 * 
 * DisplayObjectType, GameType, SpriteType, RectangleType, CircleType, LineType, TextType,
 * GroupType, ButtonType, KeyboardType, PointerType, SoundType, TweenType, TweenComplexeType
 * 
 * Grid = GroupType
 * 
 */

/**
 * type for class DisplayObject
 * @typedef {Object} DisplayObjectType
 * 
 *    @property {number} x
 *    @property {number} y 
 *    @property {number} width
 *    @property {number} height
 *    @property {number} rotation
 *    @property {number} alpha
 *    @property {boolean} visible
 *    @property {number} scaleX
 *    @property {number} scaleY
 *    @property {number} pivotX
 *    @property {number} pivotY
 *    @property {number} vx
 *    @property {number} vy
 *    @property {number} layer
 *    @property {Array} children
 *    @property {Object} parent
 *    @property {boolean} shadow
 *    @property {Object} shadowColor
 *    @property {number} shadowOffsetX
 *    @property {number} shadowOffsetY
 *    @property {number} shadowBlur
 *    @property {Array} frames
 *    @property {boolean} loop
 *    @property {number} currentFrame
 *    @property {boolean} playing
 *    @property {boolean} draggable
 *    @property {boolean} circular
 *    @property {boolean} interactive
 *    @property {number} gx
 *    @property {number} gy
 *    @property {Function} addChild
 *    @property {Function} removeChild
 *    @property {number} halfWidth
 *    @property {number} halfHeight
 *    @property {number} centerX
 *    @property {number} centerY
 *    @property {Object} position
 *    @property {Function} setPosition
 *    @property {Object} localBounds
 *    @property {Function} globalBounds
 *    @property {Function} empty
 *    @property {Function} putCenter
 *    @property {Function} putTop
 *    @property {Function} putRight
 *    @property {Function} putLeft
 *    @property {Function} putBottom
 *    @property {Function} swapChildren
 *    @property {Function} swapSpritePosition - (sprites1, sprite2) 
 *    @property {Function} add
 *    @property {Function} remove
 *    @property {number} diameter
 *    @property {number} radius
 *    @property {Function} removeAll 
 */

/**
 * 
 * @typedef {Object} GameType
 *  from engine.js
 *  @property {Object} game - from displayClass.js
 *  @property {Object} canvas - from displayClass.js
 *  @property {DisplayObjectType} stage - from displayClass.js
 *  @property {Object} pointer
 *  @property {number} scale - from displayClass.js
 *  @property {Function} state - from displayClass.js
 *  @property {Function} load - from displayClass.js
 *  @property {Function} setup - from displayClass.js
 *  @property {Array} assetsToLoad - from displayClass.js
 *  @property {boolean} paused - from displayClass.js
 *  @property {Function} gameLoop - from displayClass.js
 *  @property {Function} start - from displayClass.js
 *  @property {Function} pause - from displayClass.js
 *  @property {Function} resume - from displayClass.js
 *  @property {function} scaleToWindow - from displayClass.js
 * 
 *  @property {Array} buttons - global Array with all buttons
 *  @property {Array} draggableSprites - global Array with all graggable sprites
 *  @property {displayClass} stage
 *  @property {Function} makeCanvas
 *  @property {Function} frame
 *  @property {Function} frames
 *  @property {Function} remove
 *  @property {Function} rectangle
 *  @property {Function} circle
 *  @property {Function} line
 *  @property {Function} text
 *  @property {Function} group
 *  @property {Function} sprite
 *  @property {Function} render
 *  @property {Function} renderWithInterpolation
 *  @property {Function} button
 *  @property {Function} grid
 *  @property {Function} filmstrip
 *  @property {Array} particles
 *  @property {Function} emitter
 *  @property {Function} tilingSprite
 *  @property {Array} shakingSprites
 *  @property {Function} shake
 *  @property {Object} progressBar
 * 
 *  @property {Function} hitTestPoint - from collision.js
 *  @property {Function} hitTestCircle - from collision.js
 *  @property {Function} circleCollision - from collision.js
 *  @property {Function} movingCircleCollision - from collision.js
 *  @property {Function} multipleCircleCollision - from collision.js
 *  @property {Function} hitTestRectangle - from collision.js
 *  @property {Function} rectangleCollision - from collision.js
 *  @property {Function} hitTestCircleRectangle - from collision.js
 *  @property {Function} hitTestCirclePoint - from collision.js
 *  @property {Function} circleRectangleCollision - from collision.js
 *  @property {Function} circlePointCollision - from collision.js
 *  @property {Function} hit - from collision.js
 *
 * 
 *  @property {Function} keyboard -  from interactive.js
 *  @property {Function} makePointer -  from interactive.js
 * 
 *  
 *  @property {Function} makeCanvas - from makeCanvas.js
 *  @property {Function} makeStage - from makeCanvas.js
 *  
 *  
 *  @property {Object} actx - from sounds.js
 *  @property {Function} makeSound - from sounds.js
 *  @property {Function} soundEffect - from sounds.js
 *  
 *  
 *  @property {Function} rectangle - from sprite.js
 *  @property {Function} render - from sprite.js
 *  
 *  
 *  @property {Array<TweenType>} tweens - from tweens.js
 *  @property {ReturnType<Object>} makeTween - from tweens.js, para=[[tween property]] return a Object.tweens
 *  @property {Function} tweenProperty - from tweens.js
 *  @property {Function} fadeOut - from tweens.js
 *  @property {Function} fadeIn - from tweens.js
 *  @property {Function} pulse - from tweens.js
 *  @property {Function} slide - from tweens.js
 *  @property {Function} breathe - from tweens.js
 *  @property {Function} scale - from tweens.js
 *  @property {Function} strobe - from tweens.js
 *  @property {Function} wobble - from tweens.js
 *  @property {Function} removeTween - from tweens.js
 *  @property {Function} followCurve - from tweens.js
 *  @property {Function} walkCurve - from tweens.js
 *  @property {Function} tweenProperty - from tweens.js
 *  @property {Function} fade - from tweens.js
 *  
 *  
 *  @property {Object} assets - from utilities.js
 *  @property {Function} randomInt - from utilities.js
 *  @property {Function} randomFloat - from utilities.js
 *  @property {Function} contain - from utilities.js
 *  @property {Function} outsideBounds - from utilities.js
 *  @property {Function} distance - from utilities.js
 *  @property {Function} followEase - from utilities.js
 *  @property {Function} followConstant - from utilities.js
 *  @property {Function} angle - from utilities.js
 *  @property {Function} rotateSprite - from utilities.js
 *  @property {Function} rotatePoint - from utilities.js
 *  @property {Function} shoot - from utilities.js
 *  @property {Function} wait - from utilities.js
 *  
 *  //@returns {import("./library/engine.js").G}
 */ 

/**
 * @typedef {DisplayObjectType} SpriteType - call g.sprite(source, x, y) and return new Sprite
 * 
 *  @property {Object} source
 *  @property {number} sourceX
 *  @property {number} sourceY
 *  @property {number} sourceWidth
 *  @property {number} sourceHeight
 *  @property {Object} tilesetFrame - if created from Atlas
 *  @property {Object} frames - if created from tiles set frames or atlas frames or from Images
 *  @property {Function} gotoAndStop - number is defined only if frames.length > 0
 *  @property {Function} render - with ctx
 */

/**
 * @typedef {DisplayObjectType} RectangleType - 
 * call rectangle(width, height, fillStyle, strokeStyle, lineWidth, x, y)
 * return sprite new Rectangle
 *  @property {string} fillStyle - defalut "gray"
 *  @property {string} strokeStyle - default "none" 
 *  @property {number} lineWidth - default = 0
 *  @property {Function} render - para canvas
 */

/**
 * @typedef {DisplayObjectType} CircleType
 * call circle(diameter, fillStyle, strokeStyle, lineWidth, x, y)
 * return sprite new Circle
 *  @property {string} fillStyle - defalut "gray"
 *  @property {string} strokeStyle - default "none" 
 *  @property {number} lineWidth - default = 0
 *  @property {boolean} mask
 *  @property {Function} render - para canvas
 */

/**
 * @typedef {DisplayObjectType} LineType
 * call line(strokeStyle, lineWidth, ax, ay, bx, by)
 * return sprite new Line
 *  @property {string} strokeStyle - default "none" 
 *  @property {number} lineWidth - default = 0
 *  @property {number} ax
 *  @property {number} ay
 *  @property {number} bx
 *  @property {number} by
 *  @property {string} lineJoin - default "round"
 *  @property {Function} render - para canvas
 */

/**
 * @typedef {DisplayObjectType} TextType
 * call text(content, font, fillStyle, x, y)
 * return sprite new Text
 *  @property {string} content 
 *  @property {string} font 
 *  @property {string} fillStyle 
 *  @property {string} textBaseline 
 *  @property {string} strokeText
 *  @property {Function} render - para canvas
 */

/**
 * @typedef {DisplayObjectType} GroupType
 * call group(...spritesToGroup) return sprite New Group
 *  @property {Function} calculateSize - no para, return max box containing all sprites
 */

/**
 * @typedef {SpriteType} ButtonType
 *  @property {boolean} interactive - default true
 * 
 * if use makeInteracti(o), we must define theses functions
 *  @property {Function} press
 *  @property {Function} release
 *  @property {Function} over
 *  @property {Function} out
 *  @property {Function} tap
 * after that these properties come available
 *  @property {string} state - default "up", "over", "down"
 *  @property {string} action - "pressed", "released"
 *  @property {boolean} pressed
 *  @property {boolean} hoverOver
 *  @property {Function} update - para pointer, canvas?
 */

/**
 * @typedef {Function} KeyboardType 
 *  call keyboard(keycode)
 *  @property {number} code
 *  @property {boolean} isDown
 *  @property {boolean} isUp
 *  @property {Function} press
 *  @property {Function} release
 * window.addeventListener take care of the state
 */

/**
 * @typedef {Function} PointerType 
 *  call makePointer(element, scale = 1)
 *  @property {Object} element
 *  @property {number} scale
 *  @property {number} x
 *  @property {number} y
 *  @property {number} centerX
 *  @property {number} centerY
 *  @property {number} position
 *  @property {boolean} isDown
 *  @property {boolean} isUp
 *  @property {boolean} tapped
 *  @property {number} downTime
 *  @property {number} lastDownTime
 *  @property {boolean} doubleClick
 *  @property {number} elapsedTime
 *  @property {Function} press
 *  @property {Function} release
 *  @property {Function} tap
 *  @property {Function} hitTestSprite - with a sprite
 *  @property {Function} updateDragAndDrop - must be call with draggable sprite
 * window.addeventListener take care of the state
 * return a pointer
 */

/**
 * @typedef {Object} SoundType 
 *  call makeSound(source, loadHandler)
 *  @property {Object} source
 *  @property {Function} loadHandler
 *  @property {Object} actx
 *  @property {Object} volumeNode
 *  @property {Object} panNode
 *  @property {Object} convolverNode
 *  @property {Object} delayNode
 *  @property {Object} feedbackNode
 *  @property {Object} filterNode
 *  @property {Object} soundNode
 *  @property {Object} buffer
 *  @property {boolean} loop
 *  @property {boolean} playing
 *  @property {number} panValue
 *  @property {number} volumeValue
 *  @property {number} startTime
 *  @property {number} startOffset
 *  @property {number} playbackRate
 *  @property {boolean} randomPitch
 *  @property {boolean} reverb
 *  @property {number} reverbImpulse
 *  @property {boolean} echo
 *  @property {number} delayValue
 *  @property {number} feebackValue
 *  @property {number} filterValue
 *  @property {boolean} hasLoaded
 *  @property {Function} play - call by play()
 *  @property {Function} setReverb - (duration = 2, decay = 2, reverse = false)
 *  @property {Function} setEcho - (delayValue = 0.3, feedbackValue = 0.3, filterValue = 0
 *  @property {Function} pause - call pause()
 *  @property {Function} restart - call restart()
 *  @property {Function} playFrom - call palyFrom(value)
 *  @property {Function} playSection - (start, end)
 *  @property {number} volume
 *  @property {number} pan
 * window.addeventListener take care of the state
 * return a new sound
 */

/**
 * @typedef {Object} TweenType 
 * call tweenProperty(sprite,property,startValue,endValue,totalFrames,
 *    type = ["smoothstep"],yoyo = false,delayBeforeRepeat = 0)
 *  @property {number} startMagnitude - good only for "spline"
 *  @property {number} endMagnitude - good only for "spline"
 *  @property {Function} start - (startValue, endValue)
 *  @property {Function} update - call update()
 *  @property {Function} end - call end()
 *  @property {Function} play - call play()
 *  @property {Function} pause - call pause()
 * return an Object
 */

/**
 * @typedef {Object} TweenComplexeType 
 * call makeTween(tweensToAdd) : Array of tweenProperty
 *  @property {Array<TweenType>} tweens
 *  @property {Function} pause - call pause()
 *  @property {Function} play - call paly)
 * return an Object
 * call removeTween(tweenObject) to remove tweens
 */

/**
 * ! Still followCurve walkPath walkCurve in tweens.js
 */