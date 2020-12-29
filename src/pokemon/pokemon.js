const type = 'fire'.toUpperCase(); //str & changer l'intérieur du ' ' change le type
    //const type = str.split('-').pop().toUpperCase(); Au cas ou on doit get la bdd du TSX
    document.querySelector('.type').innerHTML = type;

    switch (type) {
        case 'BUG':
            var color = "var(--type-bug)";
            changeType(color);
            break;
        case 'DARK':
            var color = "var(--type-dark)";
            changeType(color);
            break;
        case 'DRAGON':
            var color = "var(--type-dragon)";
            changeType(color);
            break;
        case 'ELECTRIC':
            var color = "var(--type-electric)";
            changeType(color);
            break;
        case 'FAIRY':
            var color = "var(--type-fairy)";
            changeType(color);
            break;
        case 'FIGHTING':
            var color = "var(--type-fighting)";
            changeType(color);
            break;
        case 'FIRE':
            var color = "var(--type-fire)";
            changeType(color);
            break;
        case 'FLYING':
            var color = "var(--type-flying)";
            changeType(color);
            break;
        case 'GHOST':
            var color = "var(--type-ghost)";
            changeType(color);
            break;
        case 'GRASS':
            var color = "var(--type-grass)";
            changeType(color);
            break;
        case 'GROUND':
            var color = "var(--type-ground)";
            changeType(color);
            break;
        case 'ICE':
            var color = "var(--type-ice)";
            changeType(color);
            break;
        case 'NORMAL':
            var color = "var(--type-normal)";
            changeType(color);
            break;
        case 'POISON':
            var color = "var(--type-poison)";
            changeType(color);
            break;
        case 'PSYCHIC':
            var color = "var(--type-psychic)";
            changeType(color);
            break;
        case 'ROCK':
            var color = "var(--type-rock)";
            changeType(color);
            break;
        case 'STEEL':
            var color = "var(--type-steel)";
            changeType(color);
            break;
        case 'WATER':
            var color = "var(--type-water)";
            changeType(color);
            break;
        default:
            console.log(`Sorry, the type doesn't exist.`);
    }

    function changeType(color) {
        const myType = document.getElementsByClassName('type')
        myType[0].style.backgroundColor = color;
    }