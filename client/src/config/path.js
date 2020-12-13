const BOARD_ID = ':board_id';

const PATH = {
  home: () => '/',
  boards: () => '/boards',
  board: (boardId = BOARD_ID) => `/board/${boardId}`
}

export default PATH;