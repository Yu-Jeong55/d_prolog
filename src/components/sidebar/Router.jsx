import React from 'react';
import {
  IoCalendarClearOutline,
  IoPieChartOutline,
  IoDocumentTextOutline,
  IoPersonOutline,
  IoChatboxOutline,
  IoChevronDown,
  IoChevronUp,
} from 'react-icons/io5';

const SidebarData = [
  {
    path: '/',
    name: '일정 관리',
    icon: <IoCalendarClearOutline />,
    iconClosed: <IoChevronDown />,
    iconOpened: <IoChevronUp />,
  },
  {
    path: '/masterpaper',
    name: '마스터 자기소개서',
    icon: <IoDocumentTextOutline />,
    iconClosed: <IoChevronDown />,
    iconOpened: <IoChevronUp />,
  },
  {
    path: '/analysis',
    name: '통계',
    icon: <IoPieChartOutline />,
  },
  {
    path: '/chatting',
    name: '채팅',
    icon: <IoChatboxOutline />,
    iconClosed: <IoChevronDown />,
    iconOpened: <IoChevronUp />,
  },
  {
    path: '/myinfo',
    name: '내 정보',
    icon: <IoPersonOutline />,
  },
];

export default SidebarData;
