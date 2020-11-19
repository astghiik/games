export const checkField = (i, ships) => {
    if (!ships.includes(i)) {
        switch (i) {
            case 0:
                if (ships.includes(1) || ships.includes(10) || ships.includes(11)) return false;
                break;
            case 9:
                if (ships.includes(8) || ships.includes(18) || ships.includes(19)) return false;
                break;
            case 90:
                if (ships.includes(80) || ships.includes(81) || ships.includes(91)) return false;
                break;
            case 99:
                if (ships.includes(88) || ships.includes(89) || ships.includes(98)) return false;
                break;
            default:
                if (i % 10 === 0) {
                    if (ships.includes(i - 10) ||
                        ships.includes(i - 9) ||
                        ships.includes(i + 1) ||
                        ships.includes(i + 10) ||
                        ships.includes(i + 11)
                    ) return false;
                } else if (i % 10 === 9) {
                    if (ships.includes(i - 10) ||
                        ships.includes(i - 11) ||
                        ships.includes(i - 1) ||
                        ships.includes(i + 9) ||
                        ships.includes(i + 10)
                    ) return false;
                } else {
                    if (ships.includes(i - 11) ||
                        ships.includes(i - 10) ||
                        ships.includes(i - 9) ||
                        ships.includes(i - 1) ||
                        ships.includes(i + 1) ||
                        ships.includes(i + 9) ||
                        ships.includes(i + 10) ||
                        ships.includes(i + 11)
                    ) return false;
                }

        }
    }

    return true;
}