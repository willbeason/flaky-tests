'use client';

import { useEffect, useState } from 'react';
import { Button, Table } from '@mantine/core';
import { Game, getFoo } from '@/remote/client';

export default function SequenceTesterCard({ yourName, game }: { yourName: string; game: Game }) {
  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Your name</Table.Th>
            <Table.Th>Your game</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>{yourName}</Table.Td>
            <Table.Td>{game.id}</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
      <Button onClick={handleButtonClick}>Click me!</Button>
    </>
  );
}
