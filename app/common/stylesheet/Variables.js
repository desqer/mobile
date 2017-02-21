import Color from 'color'

const Colors = {
    primary:   Color('#BE446D'),
    secundary: Color('#EE8B6C'),
    success:   Color('#B5CA67'),
    danger:    Color('#DA5D5D'),
}

export default {
    colors: {
        'primary':        Colors.primary,
        'primary-dark':   Colors.primary.darken(0.1),

        'secundary':      Colors.secundary,
        'secundary-dark': Colors.secundary.darken(0.1),

        'success':        Colors.success,
        'success-dark':   Colors.success.darken(0.1),

        'danger':         Colors.danger,
        'danger-dark':    Colors.danger.darken(0.1),
    }
}
